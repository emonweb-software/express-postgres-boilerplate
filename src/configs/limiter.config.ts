import rateLimit from "express-rate-limit";

// Create rate limiter
const limiterConfig = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

export default limiterConfig;