import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import session from "express-session";
import db from "./database/db";
// CORRECCIÓN: Importamos tu archivo local desde la misma carpeta
import passport from "./passport"; 

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = Number(process.env.PORT) || 3000;
const SECRET = process.env.SECRET || "una-clave-secreta-muy-larga-random";

// --- ARCHIVOS ESTÁTICOS ---
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));

// --- SESIÓN ---
const sessionMiddleware = session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === "production" },
});

app.use(sessionMiddleware);

// --- PASSPORT ---
app.use(passport.initialize());
app.use(passport.session());

// --- COMPARTIR SESIÓN CON SOCKET.IO ---
io.engine.use(sessionMiddleware);
io.engine.use(passport.initialize());
io.engine.use(passport.session());

// --- RUTAS ---
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, "login.html"));
});

app.get("/chat", (req: Request, res: Response) => {
  if ((req as any).isAuthenticated()) {
    return res.sendFile(path.join(publicPath, "chat.html"));
  }
  res.redirect("/");
});

app.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/chat");
  }
);

app.get("/logout", (req: any, res: Response, next: NextFunction) => {
  req.logout((err: any) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

// --- LÓGICA DE SOCKET.IO ---
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  socket.on("username", () => {
    const user = (socket.request as any).user;
    if (user) {
      const username = user.displayName || user.emails?.[0]?.value || "Usuario";
      socket.data.username = username;
      socket.emit("username", { username });
    } else {
      socket.emit("username", { username: "Invitado" });
    }
  });

  socket.on("send-message", (msg: string) => {
    const username = socket.data.username || "Anónimo";
    db.query(
      "INSERT INTO messages (user, message) VALUES (?, ?)",
      [username, msg],
      (err) => {
        if (err) console.error("Error guardando mensaje:", err);
      }
    );
    io.emit("new-message", { username, msg });
  });

  socket.on("initial-messages", () => {
    db.query(
      "SELECT user, message FROM messages ORDER BY created_at DESC LIMIT 50",
      (err, results: any) => {
        if (!err && results) {
          socket.emit("initial-message", { msg: JSON.stringify(results.reverse()) });
        }
      }
    );
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});