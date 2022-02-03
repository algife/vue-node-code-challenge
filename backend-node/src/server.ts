import express, { Express, Request, Response, NextFunction } from "express";
import http, { Server } from "http";
import morgan from "morgan";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { PORT } from "./config/global.config";
import { swaggerDocs } from "./config/swagger-options.config";
import corsPolicy from "./middleware/cors-policy";
import apiRouter from "./routes/api-router";

const app: Express = express();

/* MIDDLEWARES */

// -- Logging
app.use(morgan("dev"));
// -- Parse the request body
app.use(express.urlencoded({ extended: false }));
// -- Parse JSON data
app.use(express.json());
// -- CUSTOM middleware to apply CORS policy (we can make use of the cors npm package as well if we wish)
app.use(corsPolicy);

// ! STATIC ROUTES
// // /**
// //  * @swagger
// //  * /
// //  *  get:
// //  *   description: Homepage and Public Static Folder
// //  *   responses:
// //  *   '200':
// //  *     description: a successful response
// //  */
app.use("/", express.static(path.join(__dirname, "../public")));

// ! API DOCUMENTATION
// TODO: Swagger is not discovering the routes It needs a fix in the config file
app.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { explorer: true })
);

// ! Routes
app.use("/api/v1/", apiRouter);

// Server Initialization
const httpServer: Server = http.createServer(app);
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
