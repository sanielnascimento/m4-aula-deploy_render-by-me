import { JwtPayload } from "jsonwebtoken";
import { ISessionBody, IUserBody } from "../../interfaces";

declare global {
  namespace Express {
    interface Request {
      decoded: JwtPayload;
      validatedBody: IUserBody | ISessionBody;
    }
  }
}
