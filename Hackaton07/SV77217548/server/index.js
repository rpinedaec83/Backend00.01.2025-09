const express = require("express");
const path = require("path");
const axios = require("axios");

class Server {

    constructor() {
        this.port = process.env.PORT || 8080;
        this.githubApi = process.env.GITHUB_API;
        this.openWeatherKey = process.env.OPENWEATHER_KEY;
        this.exchangeKey = process.env.EXCHANGE_API_KEY;
        this.nasaApi = process.env.NASA_API;
        this.nasaApiKey = process.env.NASA_API_KEY;
        this.unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
        this.tmdbKey = process.env.TMDB_API_KEY;
        
        this.app = express();

        this.middlewares();
        this.routes();

        this.dbConnection();
    }

    middlewares() {
        // Para parsear JSON y formularios
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        // Configurar carpeta views para vistas con pug
        this.app.set("view engine", "pug");
        this.app.set("views", path.join(__dirname, "../views"));

        // Carpeta pública para CSS, imágenes, etc.
        this.app.use(express.static(path.join(__dirname, "../public")));
    }

    routes() {
        // Vista Principal Web
        this.app.get("/", (req, res) => {
            res.render("index");
        });

        // Consultar los datos de GitHub de un usuario especifico.
        this.app.get("/github", async (req, res) => {
            const username = (req.query.username || "").trim();

            if (!username) {
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

        // Consultar el Clima de una ciudad o ubicacion especifica.
        this.app.get("/clima", async (req, res) => {
            const ciudad = (req.query.ciudad || "").trim();

            if (!ciudad) {
                return res.render("clima", {
                    error: "Debes ingresar una ciudad",
                    ciudad: null,
                    weather: null,
                });
            }

            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                    ciudad
                )}&appid=${this.openWeatherKey}&units=metric`;

                const result = await axios.get(url);

                res.render("clima", {
                    error: null,
                    ciudad,
                    weather: result.data,
                });
            } catch (err) {
                console.error(err.message);
                res.render("clima", {
                    error: "Ocurrió un error consultando el clima",
                    ciudad,
                    weather: null,
                });
            }
        });

        // Consultar el tipo de cambio del dolar en Peru.
        this.app.get("/cambio", async (req, res) => {
            // moneda destino, por defecto PEN
            const to = (req.query.to || "PEN").trim().toUpperCase();
            // monto en USD, por defecto 1
            const amount = Number(req.query.amount || 1);

            try {
                const url = `https://v6.exchangerate-api.com/v6/${this.exchangeKey}/latest/USD`;
                const result = await axios.get(url);

                const rates = result.data.conversion_rates;
                const rate = rates[to];

                if (!rate) {
                    return res.render("cambio", {
                        error: `La moneda "${to}" no existe o no está soportada`,
                        base: "USD",
                        to,
                        amount,
                        rate: null,
                        converted: null,
                        date: result.data.time_last_update_utc,
                        raw: result.data,
                    });
                }

                const converted = amount * rate;

                res.render("cambio", {
                    error: null,
                    base: "USD",
                    to,
                    amount,
                    rate,
                    converted,
                    date: result.data.time_last_update_utc,
                    raw: result.data,
                });
            } catch (err) {
                console.error("Error consultando tipo de cambio:", err.response?.data || err.message);
                res.render("cambio", {
                    error: "Ocurrió un error consultando el tipo de cambio",
                    base: "USD",
                    to,
                    amount,
                    rate: null,
                    converted: null,
                    date: null,
                    raw: null,
                });
            }
        });

        // Consultar la lista de Pokemones actual.
        this.app.get("/pokemones", async (req, res) => {
            const rawLimit = (req.query.limit || "todos").trim().toLowerCase();

            let limit;

            if (rawLimit === "todos") {
                limit = 100000;
            } else {
                const parsed = Number(rawLimit);

                if (!rawLimit || Number.isNaN(parsed) || parsed <= 0) {
                    return res.render("pokemon-list", {
                        error: 'El valor de "Cantidad" debe ser un número positivo o la palabra "todos"',
                        list: null,
                    });
                }

                limit = parsed;
            }

            try {
                const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
                const result = await axios.get(url);

                res.render("pokemon-list", {
                    error: null,
                    list: result.data,
                });
            } catch (err) {
                console.error(err.message);
                res.render("pokemon-list", {
                    error: "Ocurrió un error consultando la lista de pokemones",
                    list: null,
                });
            }
        });


        // Consultar los poderes de un pokemon especifico.
        this.app.get("/pokemon", async (req, res) => {
            const name = (req.query.name || "").trim().toLowerCase();

            if (!name) {
                return res.render("pokemon", {
                    error: "Debes ingresar el nombre de un Pokémon",
                    pokemon: null,
                    abilities: null,
                });
            }

            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
                const result = await axios.get(url);
                const pokemon = result.data;
                const abilities = pokemon.abilities.map(a => a.ability.name);

                res.render("pokemon", {
                    error: null,
                    pokemon,
                    abilities,
                });
            } catch (err) {
                console.error(err.message);
                res.render("pokemon", {
                    error: "Ocurrió un error consultando el Pokémon",
                    pokemon: null,
                    abilities: null,
                });
            }
        });


        // Consultar datos especificos de Marte.
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

