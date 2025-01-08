import logger from "@/configs/logger-config"

const logging = (req: TRequest, res: TResponse, next: TNextFunction) => {
  logger.info(`Received request: ${req.method} ${req.url}`)
  next()
}

export default logging
