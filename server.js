import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

// State for our app
const tasks = [];

app.get("/tasks", (req, res) => {
  //   console.log("get route is called");

  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  //   console.log("post route called");

  const reqBody = req.body;

  if (!req.body["content"] || !req?.body["content"].trim()) {
    res.statusCode = 400;
    res.json({
      status: "failed",
      message: "Request body must contain content property",
    });
    return res.end();
  }

  const newTask = {
    id: crypto.randomUUID(),
    priority: "low",
    completed: false,
    content: req.body["content"].trim(),
    createdAt: new Date().getTime(),
  };

  console.log(newTask);

  tasks.push(newTask);

  res.json({
    status: "success",
    task: newTask,
  });
});

app.listen("3000", () => {
  console.log("Server started 🔥");
});
