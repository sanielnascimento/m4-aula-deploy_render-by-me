import { Request, Response } from "express";
import { createSessionService } from "../../services";
import { ISessionBody } from "../../interfaces";

const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await createSessionService(req.validatedBody as ISessionBody);

  return res.status(200).json(token);
};

export default createSessionController;
