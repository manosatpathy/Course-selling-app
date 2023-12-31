import express from "express";
import jwt from "jsonwebtoken";
import { authenticateJwt } from "../middlewares/authenticateJwt.js";
import { Course, User } from "../models/models.js";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET_KEY;

if (!secret) {
  throw new Error("Secret key is not defined in environment variables.");
}

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.status(403).json({ message: "user already exists" });
  }
  const newUser = new User({ username, password });
  await newUser.save();
  const token = jwt.sign({ username, role: "user" }, secret, {
    expiresIn: "30d",
  });
  res.cookie("token", token, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ message: "admin created successfuly", token });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, secret, {
      expiresIn: "30d",
    });
    res.cookie("token", token, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
    res.json({ message: "user signed in succefully", token });
  } else {
    res.status(403).json({ message: "invalid username and password" });
  }
});

router.get("/courses", authenticateJwt, async (req, res) => {
  const courses = await Course.find({ published: true });
  res.json({ courses });
});

router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (course) {
    const user = await User.findOne({ username: req.headers["username"] });
    if (user) {
      user.purchasedCourses.push(course._id);
      await user.save();
      res.json({ message: "course purchased succefully" });
    } else {
      res.status(403).json({ message: "user not found" });
    }
  } else {
    res.status(403).json({ message: "course not found" });
  }
});

router.get("/purchasedCourses", authenticateJwt, async (req, res) => {
  const username = req.headers["username"];
  const user = await User.findOne({ username: username }).populate(
    "purchasedCourses"
  );
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses });
  } else {
    res.status(403).json({ message: "user not found" });
  }
});

export default router;
