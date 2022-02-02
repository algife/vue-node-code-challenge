import express from "express";
import { getAlbumsHandler } from "../controllers/albums";
import { homePageHandler } from "../controllers/general";
import notFoundHandler from "../controllers/not-found";

const router = express.Router();

// The apiendpoint order matters
router.get("/", homePageHandler);
router.get("/albums", getAlbumsHandler);
router.all("/**", notFoundHandler);

export default router;
