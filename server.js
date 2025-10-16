import express from "express";

const app = express();

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const reqBody = req?.body["content"] || "";

  if (!reqBody) {
    res.statusCode = 400;
    return res.json({
      status: "failed",
      message: "Request body must contain content property",
    });
  }

  const newTask = {
    id: crypto.randomUUID(),
    priority: "low",
    completed: false,
    content: reqBody.trim(),
    createdAt: new Date().getTime(),
  };

  // console.log(newTask);

  tasks.push(newTask);

  res.json({
    status: "success",
    task: newTask,
  });
});

app.delete("/tasks", (req, res) => {
  const reqBody = req?.body["id"] || "";

  if (!reqBody) {
    res.statusCode = 400;
    return res.json({
      status: "failed",
      message: "Request body must contain valid task id",
    });
  }

  const taskIndex = tasks.findIndex((task) => task.id === reqBody);

  if (taskIndex === -1) {
    res.statusCode = 404;
    return res.json({
      status: "failed",
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  return res.json({
    status: "success",
    deletedTask,
  });
});

app.patch("/tasks", (req, res) => {
  const reqBody = req?.body["id"] || "";

  if (!reqBody) {
    res.statusCode = 400;
    return res.json({
      status: "failed",
      message: "Request body must contain valid task id",
    });
  }

  const taskIndex = tasks.findIndex((task) => task.id === reqBody);

  if (taskIndex === -1) {
    res.statusCode = 404;
    return res.json({
      status: "failed",
      message: "Task not found",
    });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], ...reqBody };

  return res.json({
    status: "success",
    message: "updated",
  });
});

app.listen(Bun.env.PORT, () => {
  console.log(`Server started on ${Bun.env.PORT} 🔥`);
});
