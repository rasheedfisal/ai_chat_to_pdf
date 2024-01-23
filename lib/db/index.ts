import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../env.server";

neonConfig.fetchConnectionCache = true;

if (!env.DATABASE_URL) {
  throw new Error("database url not found");
}

const sql = neon(env.DATABASE_URL);

export const db = drizzle(sql);
