import "dotenv/config";
import express, { Request, Response } from "express";
import path from "path";
import http from "http";
import { Server, Socket } from "socket.io";
import bodyParser from "body-parser";
import passport from "passport";
import bcrypt from "bcrypt";
import session from "express-session";
import con from "./database/db";
import "./passport";

type GoogleProfile = {
    email?: string;
};

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = Number(process.env.PORT) || 3000;
const SECRET = process.env.SECRET ?? "";

app.use(express.static(path.join(process.cwd(), "src", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000 // 24 horas
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

let username: string | undefined;
const connections: Socket[] = [];
let email: string | undefined;

app.get("/", (req, res) => {
    authenticate(req, res);
});

app.get("/google", passport.authenticate("google", { scope: ["email"] }));

app.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    (req, res) => {
        const profile = req.user as GoogleProfile | undefined;
        console.log(profile?.email);
        email = profile?.email;
        res.redirect("/success");
    }
);

app.get("/logout", (req, res) => {
    console.log("llego el logout");
    if (req.session) {
        req.session.user = undefined;
        req.session.destroy(() => {});
    }
    res.redirect("/login");
});

app.get("/success", (req, res) => {
    const safeEmail = email ?? "";
    const sql = `REPLACE INTO login (usermane,password) VALUES('${safeEmail}', 'oauth');`;
    con.query(sql, (err) => {
        if (err) throw err;
        if (req.session) {
            req.session.user = safeEmail;
        }
        username = safeEmail;
        res.redirect("/chat_start");
    });
});

app.get("/chat_start", (req, res) => {
    authenticate(req, res);
});

function authenticate(req: Request, res: Response): void {
    if (!req.session?.user) {
        res.sendFile(path.join(process.cwd(), "src", "public", "login.html"));
    } else {
        username = req.session.user;
        res.sendFile(path.join(process.cwd(), "src", "public", "chat.html"));
    }
}

server.listen(PORT, () => {
    console.log("Servidor iniciado");
});
