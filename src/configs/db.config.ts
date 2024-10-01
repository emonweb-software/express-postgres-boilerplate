import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const env = process.env as NodeJS.ProcessEnv;

const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: Number(env.DB_PORT),
});

export default pool;
