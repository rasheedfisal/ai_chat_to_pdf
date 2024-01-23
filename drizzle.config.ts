import type { Config } from "drizzle-kit";
import { env } from "./lib/env.server";

export default {
  driver: "pg",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;

// npx drizzle-kit push:pg
