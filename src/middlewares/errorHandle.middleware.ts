import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'
import { EntityNotFoundError, QueryFailedError } from 'typeorm'

const handleErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  if (err instanceof EntityNotFoundError) {
    return res.status(404).json({ message: 'Not found' })
  }

  if (err instanceof QueryFailedError && err.message.includes('unique')) {
    const message: string = err.driverError.detail
    return res.status(409).json({ message })
  }

  console.error(err)

  return res.status(500).json({ message: 'Internal Server Error!' })
}

export default handleErrorMiddleware
