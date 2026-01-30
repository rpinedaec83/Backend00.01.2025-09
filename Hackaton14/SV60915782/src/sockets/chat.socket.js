const Message = require("../models/Message");
const { getBotResponse } = require("../bot/bot.service");

module.exports = (io) => {
  io.on("connection", async (socket) => {
    console.log("🟢 Usuario conectado");

    const messages = await Message.find().sort({ createdAt: 1 });
    socket.emit("chat-history", messages);

    const { getBotResponse } = require("../bot/bot.service");

socket.on("send-message", async (data) => {
  // Guardar mensaje del usuario
  const userMessage = await Message.create(data);
  io.emit("new-message", userMessage);

  // Detectar comando /bot
  if (data.text.startsWith("/bot")) {
    const question = data.text.replace("/bot", "").trim();

    const botReplyText = await getBotResponse(question);

    const botMessage = await Message.create({
      user: "BOT",
      text: botReplyText
    });

    io.emit("new-message", botMessage);
  }
});


    socket.on("edit-message", async ({ id, text }) => {
      const updated = await Message.findByIdAndUpdate(
        id,
        { text, edited: true },
        { new: true }
      );
      io.emit("message-edited", updated);
    });

    socket.on("clear-chat", async () => {
      await Message.deleteMany();
      io.emit("chat-cleared");
    });

    socket.on("disconnect", () => {
      console.log("🔴 Usuario desconectado");
    });
  });
};
