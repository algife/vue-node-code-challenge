import { Request, Response, NextFunction } from "express";

const corsPolicy = (req: Request, res: Response, next: NextFunction) => {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET"); // Others: PATCH DELETE POST
    return res.status(200).json({});
  }
  next();
};

export default corsPolicy;
