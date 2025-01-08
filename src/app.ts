import express from "express"
import helmet from "helmet"
import cors from "cors"
import lodash from "lodash"

import limiter from "./configs/limiter-config"
import session from "./configs/session-config"
import env from "./configs/env-config"
import routerV1 from "./routes/v1"

// Initialize app
const app = express()

// Use middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())
app.use(limiter)
app.use(session)

// Use routes
app.use("/v1", routerV1)

// Startup app
const startServer = () => {
  app.listen(env.APP_PORT || lodash.random(8000, 8999), () => {
    console.log(`Server app is running on http://localhost:${env.APP_PORT}`)
  })
}

startServer()
