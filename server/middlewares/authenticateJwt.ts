import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();
const secret = process.env.SECRET_KEY;

if (!secret) {
  throw new Error("Secret key is not defined in environment variables.");
}

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(
      token,
      secret,
      (err: VerifyErrors | null, user: JwtPayload | string | undefined) => {
        if (err) {
          res.status(403).json({ message: "Authentication failed" });
        }
        if (!user) {
          return res.sendStatus(403);
        }
        if (typeof user === "string") {
          return res.sendStatus(403);
        }
        req.headers["username"] = user.username;
        next();
      }
    );
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
