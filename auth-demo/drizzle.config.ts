import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/auth-schema.ts",
  dialect: "sqlite",
  dbCredentials: { url: "sqlite.db" },
});