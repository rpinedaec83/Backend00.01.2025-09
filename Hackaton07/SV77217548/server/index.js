const express = require("express");
const path = require("path");
const axios = require("axios");

class Server {
    originPath = "/api";
    githubPath = "/github";
    marsPath = "/mars";

    constructor() {
        this.port = process.env.PORT || 8080;
        this.githubApi = process.env.GITHUB_API;
        this.nasaApi = process.env.NASA_API;
        this.nasaApiKey = process.env.NASA_API_KEY;
        this.app = express();

        this.middlewares();
        this.routes();

        this.dbConnection();
    }

    middlewares() {
        // Para parsear JSON y formularios
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Motor de vistas Pug
        this.app.set("view engine", "pug");
        // views estará en una carpeta ../views (al lado de server/)
        this.app.set("views", path.join(__dirname, "../views"));

        // Carpeta pública para CSS, imágenes, etc.
        this.app.use(express.static(path.join(__dirname, "../public")));
    }

    routes() {
        this.app.get(`${this.originPath}/ok`, (req, res) => {
        res.json({
            success: true,
            message: "Todo bien",
        });
    });

    // API GitHub
    this.app.get(
        `${this.originPath}${this.githubPath}/:username`,
        async (req, res) => {
            const params = req.params;
            console.log("params", params);

            if (!params.username.trim()) {
                return res.status(400).json({
                    code: "BAD_REQUEST",
                    statusCode: 400,
                    errors: {
                        message: "El usuario es requerido",
                    },
                });
            }
            console.log(`${this.githubApi}${params.username.trim()}`);
            const result = await axios.get(
                `${this.githubApi}${params.username.trim()}`
            );
            
            console.log("result", result);
            
            if (!result.data) {
                return res.status(404).json({
                    code: "NOT_FOUND",
                    statusCode: 404,
                    errors: {
                        message: "El usuario no existe",
                    },
                });
            }
            res.json(result.data);
        }
    );

    // API NASA
    this.app.get(`${this.originPath}${this.marsPath}`, async (req, res) => {
        const result = await axios.get(
            `${this.nasaApi}/insight_weather/?api_key=${this.nasaApiKey}&feedtype=json&ver=1.0`
        );

        res.json({
            success: true,
            data: result.data,
        });
    });

  // --- HOME WEB (HTML) ---

  this.app.get("/", (req, res) => {
      res.render("index"); // va a buscar views/index.pug
    });

    // --- VISTA WEB PARA GITHUB ---
    this.app.get("/github", async (req, res) => {
      const username = (req.query.username || "").trim();

      if (!username) {
        // Renderizamos la misma vista de GitHub pero con error
        return res.render("github", {
          error: "Debes ingresar un usuario de GitHub",
          user: null,
        });
      }

      try {
        const result = await axios.get(
          `${this.githubApi}${username}`
        );

        if (!result.data) {
          return res.render("github", {
            error: "No se encontraron datos del usuario",
            user: null,
          });
        }

        res.render("github", {
          error: null,
          user: result.data,
        });
      } catch (err) {
        console.error(err.message);
        res.render("github", {
          error: "Ocurrió un error consultando GitHub",
          user: null,
        });
      }
    });

    // --- VISTA WEB PARA MARTE ---
    this.app.get("/mars", async (req, res) => {
      try {
        const result = await axios.get(
          `${this.nasaApi}/insight_weather/?api_key=${this.nasaApiKey}&feedtype=json&ver=1.0`
        );

        res.render("mars", {
          data: result.data,
          error: null,
        });
      } catch (err) {
        console.error(err.message);
        res.render("mars", {
          data: null,
          error: "Ocurrió un error consultando los datos de Marte",
        });
      }
    });

}

  dbConnection() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = {
  Server,
};

