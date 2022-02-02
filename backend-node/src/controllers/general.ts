import { Request, Response, NextFunction } from "express";

export const homePageHandler = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  const result = "API is running...";
  return _res.status(200).json({ message: result });
};
