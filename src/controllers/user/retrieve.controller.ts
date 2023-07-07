import { Request, Response } from "express";
import { retrieveUserService } from "../../services";

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await retrieveUserService(parseInt(req.params.id));

  return res.status(200).json(user);
};

export default retrieveUserController;
