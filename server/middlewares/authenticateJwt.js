import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET_KEY;

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        res.status(403).json({ message: "authentication failed" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

export default authenticateJwt;
