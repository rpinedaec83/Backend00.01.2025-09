import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chatSocketController } from "./controllers/chat.controller.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function createApp() {
  const app = express();
  const server = createServer(app);
  const io = new Server(server);

  app.get("/", (_, res) => {
    res.sendFile(join(__dirname, "../index.html"));
  });

  io.on("connection", (socket) => {
    console.log("user connected");
    chatSocketController(io, socket);
  });

  return { app, server };
}
