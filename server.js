import express from "express";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("signup", (req, res) => {});
app.post("signin", (req, res) => {});

// Auth middleware
app.use(function (req, res, next) {});

app.get("tasks", (req, res) => {});
app.post("task", (req, res) => {});
app.delete("tasks/:id", (req, res) => {});
app.patch("tasks/:id", (req, res) => {});

// Error handling middleware
app.use(function (err, req, res, next) {});

app.listen(Bun.env.PORT, () => {
  console.log(`Server started on ${Bun.env.PORT} 🔥`);
});
