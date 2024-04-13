require("dotenv/config");
const migrate = require("node-pg-migrate");

/**
 * For whatever reason, can't get `node-pg-migrate` to load
 * the .env file automatically. Running the migrations this way
 * works just fine 🤷‍♂️
 */

const direction = process.argv[2];
if (!["down", "up"].includes(direction)) {
  throw new Error(`Unknown migration direction: ${direction}.`);
}

migrate.default({
  databaseUrl: process.env.DATABASE_URL,
  migrationsTable: "migrations",
  dir: "migrations",
  direction,
});
