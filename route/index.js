const express = require("express");
const router = express.Router();
const constants = require("../constants");
const pokemonControllers = require("../controllers/pokemonControllers.js");
const battleControllers = require("../controllers/battleControllers.js");

router
  .route(constants.routes.pokemon)
  .post(pokemonControllers.createPokemon)
  .put(pokemonControllers.updatePokemon)
  .delete(pokemonControllers.deletePokemon)
  .get(pokemonControllers.readPokemonList);

router
  .route(constants.routes.battle)
  .post(battleControllers.createBattle)
  .get(battleControllers.readBattleList);

module.exports = router;
