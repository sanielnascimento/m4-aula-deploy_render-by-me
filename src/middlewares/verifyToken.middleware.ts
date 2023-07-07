import { Request, Response, NextFunction } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'
import { AppError } from '../error'

const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization = req.headers.authorization

  if (!authorization) {
    throw new AppError('Missing Authorization Token', 401)
  }

  const token = authorization.split(' ')[1]

  return verify(token, process.env.SECRET_KEY!, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: err.message })
    }

    req.decoded = decoded as JwtPayload

    return next()
  })
}

export default verifyTokenMiddleware
