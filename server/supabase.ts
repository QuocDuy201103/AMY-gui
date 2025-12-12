import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

let client: ReturnType<typeof postgres> | null = null;
let db: ReturnType<typeof drizzle> | null = null;

export async function connectDb() {
  if (db) {
    return db;
  }

  const databaseUrl =
    process.env.DATABASE_URL ??
    process.env.SUPABASE_URL ??
    process.env.SUPABASE_DB_URL;

  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL (or SUPABASE_URL / SUPABASE_DB_URL) is not set. Please configure your database connection string.",
    );
  }

  try {
    // Disable prefetch as it's not supported for "Transaction" pool mode
    client = postgres(databaseUrl, { prepare: false });
    db = drizzle(client, { schema });
    console.log("Supabase PostgreSQL connected successfully");
    return db;
  } catch (error) {
    console.error("Supabase PostgreSQL connection error:", error);
    throw error;
  }
}

export function getDb() {
  if (!db) {
    throw new Error("Database not connected. Call connectDb() first.");
  }
  return db;
}
