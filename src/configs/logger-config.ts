import winston from "winston"
import env from "./env-config"

const logger = winston.createLogger({
  level: env.NODE_ENV === "production" ? "error" : "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    ...(env.NODE_ENV === "production"
      ? [new winston.transports.File({ filename: "logs/error.log", level: "error" })]
      : [new winston.transports.File({ filename: "logs/combined.log" })])
  ]
})

export default logger
