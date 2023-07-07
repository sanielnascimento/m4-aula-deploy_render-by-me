import { Router } from 'express'
import { verifyTokenMiddleware } from '../middlewares'
import {
  createUserController,
  listUsersController,
  retrieveUserController,
} from '../controllers'

const userRouter = Router()

userRouter.get('', listUsersController)
userRouter.post('', createUserController)
userRouter.get('/:id', verifyTokenMiddleware, retrieveUserController)

export default userRouter
