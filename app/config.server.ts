import { z } from "zod";

const env = z
  .object({
    DATABASE_URL: z.string().min(1),
  })
  .parse(process.env);

const config = {
  databaseUrl: env.DATABASE_URL,
};

export default config;
