import {
  type DatabasePool,
  type DatabaseTransactionConnection,
  type Interceptor,
  type QueryResultRow,
  SchemaValidationError,
  type DatabaseConnection as SlonikConnection,
  createPool,
} from "slonik";

import config from "~/config.server";

export type DatabaseOrTransactionConnection =
  | SlonikConnection
  | DatabaseTransactionConnection;

let pool: DatabasePool | undefined = undefined;

const createResultParserInterceptor = (): Interceptor => ({
  transformRow: (executionContext, actualQuery, row) => {
    const { resultParser } = executionContext;

    if (!resultParser) {
      return row;
    }

    const validationResult = resultParser.safeParse(row);

    if (!validationResult.success) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.log(
          row,
          validationResult.error.issues.map((i) => ({
            ...i,
            ...("unionErrors" in i && i.unionErrors
              ? { unionErrors: JSON.stringify(i.unionErrors) }
              : {}),
            path: JSON.stringify(i.path),
          })),
          actualQuery
        );
      }
      throw new SchemaValidationError(
        actualQuery,
        row,
        validationResult.error.issues
      );
    }

    return validationResult.data as QueryResultRow;
  },
});

export const getSlonik = async (): Promise<DatabasePool> => {
  if (pool) {
    return pool;
  }

  pool = await createPool(config.databaseUrl, {
    interceptors: [
      // needed so that Zod actually works and it transforms the results
      // @see https://github.com/gajus/slonik?tab=readme-ov-file#result-parser-interceptor
      createResultParserInterceptor(),
    ],
  });

  return pool;
};
