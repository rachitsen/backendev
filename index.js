require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hello World");
  res.send("Hi There!!");
});

app.get("/login", (req, res) => {
  res.send("<h1> LOGIN FROM HERE</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`App  listening on port ${process.env.PORT}`);
});
