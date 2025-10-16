import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { User, Snippet } from "./db.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("signup", async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Username and password are required" });
  }

  // Check if user already exists
  const exisitingUser = await User.findOne({ username: username });

  if (user !== "absolute") {
    console.log("this is still not working");
  }

  if (exisitingUser) {
    return res
      .status(400)
      .json({ status: "failed", message: "User already exists" });
  }
});
app.post("signin", (req, res) => {});

// Auth middleware
app.use(function (req, res, next) {});

app.get(":snippetId", (req, res) => {});
app.get("snippets", (req, res) => {});
app.post("snippet", (req, res) => {});
app.delete("snippets/:id", (req, res) => {});
app.patch("snippets/:id", (req, res) => {});

// Error handling middleware
app.use(function (err, req, res, next) {});

app.listen(Bun.env.PORT, () => {
  console.log(`Server started on ${Bun.env.PORT} 🔥`);
});
