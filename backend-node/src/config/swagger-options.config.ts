import swaggerJSDoc from "swagger-jsdoc";
import { PORT } from "./global.config";
import path from "path";

// Alternative: const swaggerDocument = require("./swagger.json");
const swaggerOptions: swaggerJSDoc.Options = {
  // More info at https://www.npmjs.com/package/swagger-ui-express
  // swagger: "2.0",
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      // Extended: https://swagger.io/specification/#infoObject
      version: "0.1.0",
      title: "Album Finder API",
      description: "Album Finder API to retrieve music album's information",
      contact: {
        name: "Alexandre from CookingStartups.com",
        url: "http://www.cookingstartups.com/",
        email: "cookingstartupscom@gmail.com",
      },
      // servers: [
      //   {
      //     url: `http://localhost:${PORT}`, // url
      //     description: "Local server API", // name
      //   },
      //   {
      //     url: `http://localhost:${PORT}/api/v1`, // url
      //     description: "Local server API", // name
      //   },
      // ],
    },
  },
  apis: [
    "./server.js",
    "./routes/*.js",

    // files containing annotations
    // "src/server.js",
    // "server.js",
    // "routes/api-router.js",
    // "./src/server.ts",
    // "./server.ts",
    // "./routes/api-router.ts",
    // "../src/server.ts",
    // "../server.ts",
    // "../routes/api-router.ts",
    // path.join(__dirname, "src/server.js"),
    // path.join(__dirname, "server.js"),
    // path.join(__dirname, "routes/api-router.js"),
    // path.join(__dirname, "src/server.js"),
    // path.join(__dirname, "server.ts"),
    // path.join(__dirname, "routes/api-router.ts"),
  ],

  // schemes: ["http"],
  // paths: {},
  // responses: {},
  // parameters: {},
  // securityDefinitions: {},
  // tags: [],
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
};

export const swaggerDocs = swaggerJSDoc(swaggerOptions);
