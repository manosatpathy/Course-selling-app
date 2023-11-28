import express from "express";
import authenticateJwt from "../middlewares/authenticateJwt.js";
import { Admin, Course } from "../models/models.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    res.status(403).json({ message: "admin already exists" });
  }
  const newAdmin = new Admin({ username, password });
  await newAdmin.save();
  const token = jwt.sign({ username, role: "admin" }, secret, {
    expiresIn: "1h",
  });
  res.status(200).json({ message: "admin created successfuly", token });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, secret, {
      expiresIn: "1h",
    });
    res.json({ message: "admin signed in succefully", token });
  } else {
    res.status(403).json({ message: "invalid username and password" });
  }
});

router.post("/courses", authenticateJwt, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: "course created successfully", courseId: course.id });
});

router.put("/course/:courseId", authenticateJwt, async (req, res) => {
  const course = await Course.updateOne(req.params.id, req.body, { new: true });
  if (course) {
    res.json({ message: "course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json({ courses });
});

export default router;
