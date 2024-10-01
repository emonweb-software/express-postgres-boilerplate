import express from "express";
import helmet from "helmet";
import cors from "cors";
import limiterConfig from "./configs/limiter.config";
import sessionConfig from "./configs/session.config";
import loggerConfig from "./configs/logger.config";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const env = process.env as NodeJS.ProcessEnv;

// Load environment variables
if (env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.local" });
}

// Create express app
const app = express();

// Use utility middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use security middlewares
app.use(helmet());
app.use(cors());
app.use(limiterConfig);
app.use(sessionConfig);

// Use routes
app.use("/v1", require("./routes/v1"));

// Use logging middlewares
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  loggerConfig.info(`Received request: ${req.method} ${req.url}`);
  next();
});

// Startup
app.listen(env.APP_PORT, () => {
  console.log(`Server app is running on http://localhost:${env.APP_PORT}`);
});
