import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserBody, IUserResponse } from '../../interfaces'

const createUserService = async (
  payload: IUserBody
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(User)
  const user = userRepo.create(payload)

  await userRepo.save(user)

  return user
}

export default createUserService
