const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Get req");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const single_chat = chats.find((c) => c._id === req.params.id);
  res.send(single_chat);
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(8000, console.log("Server on 5000"));
