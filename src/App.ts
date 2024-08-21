import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
  console.log(req);
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
  console.log(req);
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
  console.log(req);
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
  console.log(req);
});
