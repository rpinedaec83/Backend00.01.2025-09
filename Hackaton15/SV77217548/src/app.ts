import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import sessionMiddleware from "./config/session";
import authSessionRoutes from "./routes/authSession.routes";
import privateRoutes from "./routes/private.routes";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.set("trust proxy", 1);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(sessionMiddleware);

app.get("/", (_req, res) => {
    res.json({ok: true});
});

app.use(authSessionRoutes);
app.use(privateRoutes);

app.use(errorHandler);

export default app;
