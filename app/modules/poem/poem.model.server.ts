import { DatabaseOrTransactionConnection } from "~/db.server";
import { Poem, poemValidator } from "./poem.model";
import { createSqlTag } from "slonik";
import { z } from "zod";

const sql = createSqlTag({
  typeAliases: {
    void: z.object({}).strict(),
    poem: poemValidator,
  },
});

export async function getPoemById(
  connection: DatabaseOrTransactionConnection,
  id: Poem["id"]
) {
  return connection.maybeOne(
    sql.typeAlias("poem")/* sql */ `
        SELECT id, title, "text"
        FROM poems p
        WHERE p.id = ${id}
      `
  );
}
