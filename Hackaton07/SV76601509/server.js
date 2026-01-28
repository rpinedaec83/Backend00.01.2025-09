require('dotenv').config();
const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = express();
app.use(express.json());

const cache = new NodeCache({ stdTTL: 60 * 30 }); // caché 30 minutos por defecto
const PORT = process.env.PORT || 3000;

// helper: cached request
async function cachedGet(key, fn) {
    const exists = cache.get(key);
    if (exists) return exists;
    const value = await fn();
    cache.set(key, value);
    return value;
    }

// 1) GitHub user
app.get('/api/github/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const data = await cachedGet(`github:${username}`, async () => {
        const r = await axios.get(`https://api.github.com/users/${encodeURIComponent(username)}`);
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'GitHub lookup failed', details: err.message });
    }
    });

// 2) Clima
app.get('/api/weather', async (req, res) => {
    const q = req.query.q; // ciudad o "lat,lon"
    const key = process.env.OPENWEATHER_KEY;
    if (!key) return res.status(400).json({ error: 'Falta OPENWEATHER_KEY en .env' });
    if (!q) return res.status(400).json({ error: 'Parámetro q (ciudad o lat,lon) es requerido' });

    try {
        const cacheKey = `weather:${q}`;
        const data = await cachedGet(cacheKey, async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&appid=${key}&units=metric`;
        const r = await axios.get(url);
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'Weather lookup failed', details: err.message });
    }
    });

// 3) Tipo de cambio del dólar en Perú
app.get('/api/exchange/usd-to-pen', async (req, res) => {
    try {
        const data = await cachedGet('exchange:USD:PEN', async () => {
        // frankfurter: https://www.frankfurter.app/latest?from=USD&to=PEN
        const r = await axios.get('https://www.frankfurter.app/latest', { params: { from: 'USD', to: 'PEN' }});
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Exchange lookup failed', details: err.message });
    }
    });

// 4) Lista de Pokemones
app.get('/api/pokemon', async (req, res) => {
    const limit = req.query.limit || 100;
    try {
        const data = await cachedGet(`poke:list:${limit}`, async () => {
        const r = await axios.get('https://pokeapi.co/api/v2/pokemon', { params: { limit }});
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'PokeAPI failed', details: err.message });
    }
    });

// 5) Poderes de un pokemon
app.get('/api/pokemon/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const data = await cachedGet(`poke:detail:${name}`, async () => {
        const r = await axios.get(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}`);
        return r.data;
        });
        // devolver solo lo relevante: stats, abilities, types
        const { abilities, stats, types, id } = data;
        res.json({ id, abilities, stats, types });
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'Poke lookup failed', details: err.message });
    }
    });

// 6) Principales personajes de Rick and Morty
app.get('/api/rickandmorty/characters', async (req, res) => {
    const page = req.query.page || 1;
    try {
        const data = await cachedGet(`rm:characters:${page}`, async () => {
        const r = await axios.get('https://rickandmortyapi.com/api/character', { params: { page }});
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'RM API failed', details: err.message });
    }
    });

// 7) Detalle de personaje Rick and Morty
app.get('/api/rickandmorty/character/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await cachedGet(`rm:character:${id}`, async () => {
        const r = await axios.get(`https://rickandmortyapi.com/api/character/${encodeURIComponent(id)}`);
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'RM character failed', details: err.message });
    }
    });

// 8) Top 10 de bebidas y cocteles
app.get('/api/cocktails/top', async (req, res) => {
    try {
        const data = await cachedGet('cocktail:top', async () => {
        // la API no da "top", listamos 'popular' o filtramos por c categoría.
        const r = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/popular.php');
        // fallback: tomar los primeros 10
        return r.data.drinks ? r.data.drinks.slice(0, 10) : [];
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Cocktail API failed', details: err.message });
    }
    });

// 9) Listado de productos de una tienda
app.get('/api/store/products', async (req, res) => {
    try {
        const data = await cachedGet('store:products', async () => {
        const r = await axios.get('https://fakestoreapi.com/products');
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'FakeStore failed', details: err.message });
    }
    });

// 10) Fotografías
app.get('/api/photos', async (req, res) => {
    const query = req.query.q || 'nature';
    const size = req.query.size || 'regular'; // raw, full, regular, small, thumb
    const key = process.env.UNSPLASH_KEY;
    if (!key) return res.status(400).json({ error: 'Falta UNSPLASH_KEY en .env' });

    try {
        const data = await cachedGet(`unsplash:${query}:${size}`, async () => {
        const r = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, per_page: 12 },
            headers: { Authorization: `Client-ID ${key}` }
        });
        // map to usable sizes
        return r.data.results.map(photo => ({ id: photo.id, alt: photo.alt_description, urls: photo.urls }));
        });
        res.json(data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'Unsplash failed', details: err.message });
    }
    });

// 11) Citas famosas
app.get('/api/quotes/random', async (req, res) => {
    try {
        const data = await cachedGet('quote:random', async () => {
        const r = await axios.get('https://quotes.rest/qod'); // quote of the day
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Quotes API failed', details: err.message });
    }
    });

// 12) Datos ficticios de un usuario
app.get('/api/randomuser', async (req, res) => {
    const results = req.query.results || 1;
    try {
        const data = await cachedGet(`randomuser:${results}`, async () => {
        const r = await axios.get('https://randomuser.me/api/', { params: { results }});
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'RandomUser failed', details: err.message });
    }
    });

// 13) Top de películas de estreno y 14 detalle de una película
app.get('/api/movies/now_playing', async (req, res) => {
    const key = process.env.TMDB_KEY;
    if (!key) return res.status(400).json({ error: 'Falta TMDB_KEY en .env' });
    try {
        const data = await cachedGet('tmdb:now_playing', async () => {
        const r = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: { api_key: key, language: 'es-ES', page: 1 }
        });
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'TMDB failed', details: err.message });
    }
    });

app.get('/api/movies/:id', async (req, res) => {
    const key = process.env.TMDB_KEY;
    if (!key) return res.status(400).json({ error: 'Falta TMDB_KEY en .env' });
    try {
        const id = req.params.id;
        const data = await cachedGet(`tmdb:movie:${id}`, async () => {
        const r = await axios.get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
            params: { api_key: key, language: 'es-ES' }
        });
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: 'TMDB movie failed', details: err.message });
    }
    });

// 15) Datos específicos de Marte
app.get('/api/nasa/mars-photos', async (req, res) => {
    const key = process.env.NASA_KEY;
    if (!key) return res.status(400).json({ error: 'Falta NASA_KEY en .env' });
    const sol = req.query.sol || 1000;
    try {
        const data = await cachedGet(`nasa:mars:${sol}`, async () => {
        const r = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
            params: { sol, api_key: key }
        });
        return r.data;
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'NASA failed', details: err.message });
    }
    });

app.get('/', (req, res) => res.send({ status: 'API Gateway alive', endpoints: 'See /docs (not implemented)'}));

app.listen(PORT, () => {
    console.log(`API Gateway listening on port ${PORT}`);
});
