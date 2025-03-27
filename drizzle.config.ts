import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/backend/db/schema/index.ts",
  out: "./src/backend/db/migrations", // Output to the backend/db folder
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
