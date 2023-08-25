const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Get req");
});

app.get("/api/chats", (req, res) => {
  res.send("Get req");
});

app.get("/api/chats/:id", (req, res) => {
  const single_chat = req.params.id;
  res.send(single_chat);
});

const PORT = process.env.PORT || 5000;
app.listen(8000, console.log("Server on 8000"));
