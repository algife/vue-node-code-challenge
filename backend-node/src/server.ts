import http, { Server } from "http";
import express, { Express } from "express";
import morgan from "morgan";
import apiRoutes from "./routes/albums";
import corsPolicy from "./middleware/cors-policy";

const PORT: any = process.env.PORT ?? 5000;
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

// ! Routes
app.use("/api/v1", apiRoutes);

// Server Initialization
const httpServer: Server = http.createServer(app);
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
