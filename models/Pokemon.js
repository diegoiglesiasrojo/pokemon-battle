const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  attack: { type: Number, required: true },
  defense: { type: Number, required: true },
  hp: { type: Number, required: true },
  speed: { type: Number, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Pokemon = mongoose.model("pokemon", pokemonSchema);

module.exports = Pokemon;
