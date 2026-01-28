require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const axios = require("axios");
const Message = require("./models/Message");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB conectada"));

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

async function askBot(text) {
  const res = await axios.post("API_URL", {
    prompt: text
  });
  return res.data.response;
}

io.on("connection", async (socket) => {

  const messages = await Message.find();
  socket.emit("load_messages", messages);

  socket.on("send_message", async (data) => {

    // 🔴 COMANDO /clear
    if (data.content === "/clear") {
      await Message.deleteMany({});
      io.emit("chat_cleared");
      return;
    }

    // 🤖 BOT
    if (data.content.startsWith("@bot")) {
      const reply = await askBot(data.content);

      io.emit("receive_message", {
        username: "BOT",
        content: reply
      });
      return;
    }

    // 💬 MENSAJE NORMAL
    const msg = await Message.create(data);
    io.emit("receive_message", msg);
  });

  socket.on("edit_message", async ({ id, content }) => {
    await Message.findByIdAndUpdate(id, { content });
    io.emit("message_edited", { id, content });
  });

  socket.on("delete_all", async () => {
    await Message.deleteMany({});
    io.emit("chat_cleared");
  });

});

server.listen(3000, () =>
  console.log("Servidor en http://localhost:3000")
);
