const constants = require("../constants");
const Pokemon = require("../models/Pokemon");

const pokemonControllers = {
  createPokemon: (req, res) => {
    res.json({
      success: true,
      validationError: null,
      error: null,
      response: "createPokemon",
    });
  },
  updatePokemon: (req, res) => {
    res.json({
      success: true,
      error: null,
      response: "updatePokemon",
    });
  },
  deletePokemon: (req, res) => {
    res.json({
      success: true,
      error: null,
      response: "deletePokemon",
    });
  },
  readPokemonList: (req, res) => {
    res.json({
      success: true,
      error: null,
      response: "readPokemonList",
    });
  },
};

module.exports = pokemonControllers;
