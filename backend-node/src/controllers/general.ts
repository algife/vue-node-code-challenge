import { Request, Response } from "express";

export const homePageHandler = async (_req: Request, _res: Response) => {
  const result = "API is running...";
  return _res.status(200).json({ message: result });
};
