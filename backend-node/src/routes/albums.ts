import express from "express";
import path from "path";
import { getAlbumsByArtistIdHandler } from "../controllers/albums";
import { homePageHandler } from "../controllers/general";
import notFoundHandler from "../controllers/not-found";

const router = express.Router();

// If we want to have a static public folder to display static files:
router.get("/public", express.static(path.join(__dirname, "./public")));

// The apiendpoint order matters
router.get("/", homePageHandler);
router.get("/artist/:amgArtistId/albums", getAlbumsByArtistIdHandler);
router.all("/**", notFoundHandler);

export default router;
