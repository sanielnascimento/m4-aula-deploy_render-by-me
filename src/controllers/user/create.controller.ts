import { Request, Response } from "express";
import { createUserService } from "../../services";
import { IUserBody } from "../../interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await createUserService(req.body as IUserBody);

  return res.status(200).json(user);
};

export default createUserController;
