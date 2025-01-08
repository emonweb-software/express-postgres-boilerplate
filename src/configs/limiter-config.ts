import rateLimit from "express-rate-limit"

// Create rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})

export default limiter
