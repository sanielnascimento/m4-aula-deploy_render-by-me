interface ISessionBody {
  email: string
  password: string
}

interface ISessionResponse {
  token: string
}

export { ISessionBody, ISessionResponse }
