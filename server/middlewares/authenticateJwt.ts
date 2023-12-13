import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();
const secret = process.env.SECRET_KEY;

if (!secret) {
  throw new Error("Secret key is not defined in environment variables.");
}

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Authentication failed" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authenticateJwt;
