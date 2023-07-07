import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../error'
import { ISessionBody, ISessionResponse } from '../../interfaces'

const createSessionService = async (
  payload: ISessionBody
): Promise<ISessionResponse> => {
  const userRepo = AppDataSource.getRepository(User)
  const foundUser = await userRepo.findOneBy({ email: payload.email })

  if (!foundUser) {
    throw new AppError('Invalid credentials', 401)
  }

  const validPassword = await compare(payload.password, foundUser.password)

  if (!validPassword) {
    throw new AppError('Invalid credentials', 401)
  }

  const token = sign({ email: foundUser.email }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: foundUser.id.toString(),
  })

  return { token }
}

export default createSessionService
