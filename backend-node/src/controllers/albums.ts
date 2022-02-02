import { Request, Response, NextFunction } from "express";
import { getFromiTunesSearchAPI } from "../helpers/itunes-search-api";

export const getAlbumsHandler = async (_req: Request, _res: Response) => {
  const result = await getFromiTunesSearchAPI(_req, _res);

  console.log({ result });

  return _res.status(200).json({ message: result });
};
