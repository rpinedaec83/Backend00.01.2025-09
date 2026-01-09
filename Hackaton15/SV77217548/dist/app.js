"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const session_1 = __importDefault(require("./config/session"));
const authSession_routes_1 = __importDefault(require("./routes/authSession.routes"));
const authJwt_routes_1 = __importDefault(require("./routes/authJwt.routes"));
const private_routes_1 = __importDefault(require("./routes/private.routes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = (0, express_1.default)();
app.set("trust proxy", 1);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(session_1.default);
app.get("/", (_req, res) => {
    res.json({ ok: true });
});
app.use(authSession_routes_1.default);
app.use(authJwt_routes_1.default);
app.use(private_routes_1.default);
app.use(errorHandler_1.default);
exports.default = app;
