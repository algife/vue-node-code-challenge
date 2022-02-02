import { Request, Response, NextFunction } from "express";

export const notFoundHandler = async (
  _req: Request,
  _res: Response,
  _next: NextFunction // We can use as a middleware or as a regular endpoint instead
) => {
  const result = "Route not found";
  return _res.status(200).json({ message: result });
};

export default notFoundHandler;
