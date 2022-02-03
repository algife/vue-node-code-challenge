import express, { Response, Request, NextFunction } from "express";
import { getAlbumsByArtistIdHandler } from "../controllers/albums";
import { homePageHandler } from "../controllers/general";
import notFoundHandler from "../controllers/not-found";

const apiRouter = express.Router();

// ! API ROUTES
/**
 * @swagger
 * /api/v1/artist/:artistId/albums:
 * get:
 *   description: Gets a JSON object containing information about the albums published by an specific artist associated with the param artistId entered by the user
 *   responses:
 *     '200':
 *     description: a successful response
 * @param artistId iTunes Artist Id associated with the Id from who the user wants the information about
 */
apiRouter.get("/artist/:artistId/albums", getAlbumsByArtistIdHandler);

// JUST FOR DEMO PURPOSES
const demoEndpointsHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) =>
  res.json({
    message: "Example of a " + req.method + " endpoint being exposed",
  });
/**
 * @swagger
 * /api/v1/:
 * post:
 *   description: Example of an endpoint making use of the POST method
 *   responses:
 *   '200':
 *     description: a successful response
 */
apiRouter.post("/demo", demoEndpointsHandler);

/**
 * @swagger
 * /api/v1/:
 * put:
 *   description: Example of an endpoint making use of the PUT method
 *   responses:
 *   '200':
 *     description: a successful response
 */
apiRouter.put("/demo", demoEndpointsHandler);

/**
 * @swagger
 * /api/v1/:
 * patch:
 *   description: Example of an endpoint making use of the PATCH method
 *   responses:
 *   '200':
 *     description: a successful response
 */
apiRouter.patch("/demo", demoEndpointsHandler);

/**
 * @swagger
 * /api/v1/:
 * delete:
 *   description: Example of an endpoint making use of the DELETE method
 *   responses:
 *   '200':
 *     description: a successful response
 */
apiRouter.delete("/demo", demoEndpointsHandler);

/**
 * @swagger
 * /api/v1/:
 * get:
 *   description: Homepage that shows the user that the server API is up and running
 *   responses:
 *   '200':
 *     description: a successful response
 */
apiRouter.get("", homePageHandler);

// ! Special Routes
/**
 * @swagger
 * /api/v1/**:
 * all:
 *   description: Generic Not Found (Error 404) Route
 *   responses:
 *   '200':
 *     description: a successful response
 */
apiRouter.all("**", notFoundHandler);

export default apiRouter;
