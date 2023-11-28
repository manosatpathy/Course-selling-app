import express from "express";
import authenticateJwt from "../middlewares/authenticateJwt.js";
import { Course, User } from "../models/models.js";

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
    expiresIn: "1h",
  });
  res.status(200).json({ message: "admin created successfuly", token });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, secret, {
      expiresIn: "1h",
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
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
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
  const user = await User.findOne({ username: req.user }).populate(
    "purchasedCourses"
  );
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses });
  } else {
    res.status(403).json({ message: "user not found" });
  }
});

export default router;
