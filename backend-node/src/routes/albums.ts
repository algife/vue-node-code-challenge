import express from "express";
import path from "path";
import { getAlbumsByArtistIdHandler } from "../controllers/albums";
import { homePageHandler } from "../controllers/general";
import notFoundHandler from "../controllers/not-found";

const router = express.Router();

// If we want to have a static public folder to display static files:
// ! STATIC ROUTES
router.get("/", express.static(path.join(__dirname, "./public")));

// ! API ROUTES
router.get("/artist/:artistId/albums", getAlbumsByArtistIdHandler);

// ! Special Routes
router.get("/", homePageHandler);
router.all("/**", notFoundHandler);

export default router;
