interface IUserBody {
  username: string
  email: string
  age: number
  password: string
}

interface IUserResponse {
  id: number
  username: string
  email: string
  age: number
  createdAt: Date
}

export { IUserBody, IUserResponse }
