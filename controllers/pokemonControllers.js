const constants = require("../constants");

const pokemonControllers = {
  createPokemon: (req, res) => {
    res.json({
      success: true,
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
