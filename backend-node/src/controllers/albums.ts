import { Request, Response } from "express";
import { iTunesLookUp } from "../helpers/itunes-search-api";

// as per requirements: It retrieves a list of albums for a SPECIFIED artist
export const getAlbumsByArtistIdHandler = async (
  req: Request,
  res: Response
) => {
  const { amgArtistId } = req.params;
  const { entity } = req.query;

  const result = await iTunesLookUp(amgArtistId as string, entity as string);

  return res.status(200).json({ data: result });
};
