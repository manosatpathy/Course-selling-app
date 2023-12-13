import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;
app.use(express.json());

if (!mongoUri) {
  throw new Error("MongoDB URI is not defined in the environment variable.");
}
mongoose.connect(mongoUri);

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`App listen on ${port}`);
});
