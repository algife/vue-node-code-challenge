import { Request, Response } from "express";

export const homePageHandler = async (_req: Request, _res: Response) => {
  const result =
    "Check the API Documentation to see info about the endpoints exposed";
  return _res.status(200).json({ message: result });
};
