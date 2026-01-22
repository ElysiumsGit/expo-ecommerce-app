import express from "express";

const app = express();

const api = "api";

app.get(`/${api}/health`, (req, res) => {
  res.send("Welcome to server");
});

app.listen(3000, () => {
  console.log("Server is app running");
});
