import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserResponse } from '../../interfaces'

const listUsersService = async (): Promise<IUserResponse[]> => {
  const userRepo = AppDataSource.getRepository(User)
  const users = await userRepo.find()

  return users
}

export default listUsersService
