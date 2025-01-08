import dotenv from "dotenv"

dotenv.config()
const env = process.env as NodeJS.ProcessEnv

// Load environment variables
switch (env.NODE_ENV) {
  case "production":
    dotenv.config({ path: ".env.production" })
    break
  case "development":
    dotenv.config({ path: ".env.development" })
    break
  case "local":
    dotenv.config({ path: ".env.local" })
    break
  default:
    console.error("NODE_ENV is not defined")
    process.exit(1)
}

export default env
