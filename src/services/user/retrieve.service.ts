import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserResponse } from '../../interfaces'

const retrieveUserService = async (userId: number): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(User)
  const users = await userRepo.findOneByOrFail({ id: userId })

  return users
}

export default retrieveUserService
