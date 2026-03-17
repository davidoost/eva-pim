import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// In development, Next.js hot reloading re-evaluates modules on each change,
// creating new connection pools without closing old ones. Storing the client
// on globalThis ensures we reuse the same pool across reloads.
const globalForDb = globalThis as unknown as { pgClient: postgres.Sql };

const client =
  globalForDb.pgClient ??
  postgres(process.env.DATABASE_URL!, {
    prepare: false, // required for Supabase pooled connections
    max: 10,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pgClient = client;
}

export const db = drizzle({ client, schema });
