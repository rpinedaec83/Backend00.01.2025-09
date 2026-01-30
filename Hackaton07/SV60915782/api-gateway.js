// app.js
// API Gateway simple en Node.js usando Clases y Objetos
// Requisitos: Node 18+ (fetch nativo) o instalar node-fetch

import express from 'express';

// =====================
// Clase base de servicios
// =====================
class BaseService {
  async getJSON(url, options = {}) {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Error ${res.status} al consultar ${url}`);
    }
    return res.json();
  }
}

// =====================
// Servicios (una clase por API)
// =====================
class GitHubService extends BaseService {
  getUser(username) {
    return this.getJSON(`https://api.github.com/users/${username}`);
  }
}

class WeatherService extends BaseService {
  // Ejemplo con Open-Meteo (no requiere API key)
  getWeather(lat, lon) {
    return this.getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  }
}

class ExchangeService extends BaseService {
  getUSDToPEN() {
    return this.getJSON('https://www.frankfurter.app/latest?from=USD&to=PEN');
  }
}

class PokemonService extends BaseService {
  listPokemon(limit = 20) {
    return this.getJSON(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  }
  getPokemon(name) {
    return this.getJSON(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

class RickMortyService extends BaseService {
  listCharacters() {
    return this.getJSON('https://rickandmortyapi.com/api/character');
  }
  getCharacter(id) {
    return this.getJSON(`https://rickandmortyapi.com/api/character/${id}`);
  }
}

class CocktailService extends BaseService {
  top10() {
    return this.getJSON('https://www.thecocktaildb.com/api/json/v1/1/popular.php');
  }
}

class StoreService extends BaseService {
  listProducts() {
    return this.getJSON('https://fakestoreapi.com/products');
  }
}

class QuotesService extends BaseService {
  randomQuote() {
    return this.getJSON('https://api.quotable.io/random');
  }
}

class RandomUserService extends BaseService {
  getUser() {
    return this.getJSON('https://randomuser.me/api/');
  }
}

class NasaService extends BaseService {
  // Reemplaza DEMO_KEY por tu API key si es necesario
  marsWeather() {
    return this.getJSON('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
  }
}

// =====================
// API Gateway
// =====================
class APIGateway {
  constructor() {
    this.github = new GitHubService();
    this.weather = new WeatherService();
    this.exchange = new ExchangeService();
    this.pokemon = new PokemonService();
    this.rick = new RickMortyService();
    this.cocktail = new CocktailService();
    this.store = new StoreService();
    this.quotes = new QuotesService();
    this.randomUser = new RandomUserService();
    this.nasa = new NasaService();
  }
}

// =====================
// Servidor Express
// =====================
const app = express();
const gateway = new APIGateway();

app.get('/github/:user', async (req, res) => {
  try {
    res.json(await gateway.github.getUser(req.params.user));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    res.json(await gateway.weather.getWeather(lat, lon));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/exchange/usd-pen', async (req, res) => {
  try {
    res.json(await gateway.exchange.getUSDToPEN());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/pokemon', async (req, res) => {
  try {
    res.json(await gateway.pokemon.listPokemon());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/pokemon/:name', async (req, res) => {
  try {
    res.json(await gateway.pokemon.getPokemon(req.params.name));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/rickmorty', async (req, res) => {
  try {
    res.json(await gateway.rick.listCharacters());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/rickmorty/:id', async (req, res) => {
  try {
    res.json(await gateway.rick.getCharacter(req.params.id));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/cocktails/top10', async (req, res) => {
  try {
    res.json(await gateway.cocktail.top10());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/products', async (req, res) => {
  try {
    res.json(await gateway.store.listProducts());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/quote', async (req, res) => {
  try {
    res.json(await gateway.quotes.randomQuote());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/random-user', async (req, res) => {
  try {
    res.json(await gateway.randomUser.getUser());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/mars', async (req, res) => {
  try {
    res.json(await gateway.nasa.marsWeather());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(3000, () => console.log('API Gateway corriendo en http://localhost:3000'));
