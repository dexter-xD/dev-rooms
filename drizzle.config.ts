import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env',
})

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('Database URL not specified!');
}

export default defineConfig({
 schema: "./src/db/schema.ts",
 out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
  verbose: true,
  strict: true,
})