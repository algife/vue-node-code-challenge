import { Request, Response, NextFunction } from "express";

export const getAlbumsHandler = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  const result = [{ name: "Album", stars: 5 }];
  return _res.status(200).json({ message: result });
};
