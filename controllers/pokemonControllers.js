const constants = require("../constants");
const Pokemon = require("../models/Pokemon");

const pokemonControllers = {
  createPokemon: (req, res) => {
    const { name, attack, defense, hp, speed, type, imageUrl } = req.body;
    const nameCapitalized =
      name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1);

    const typeCapitalized =
      type.toLowerCase().charAt(0).toUpperCase() + type.toLowerCase().slice(1);

    const newPokemon = new Pokemon({
      name: nameCapitalized,
      attack,
      defense,
      hp,
      speed,
      type: typeCapitalized,
      imageUrl,
    });

    Pokemon.findOne({ name: nameCapitalized })
      .then((response) => {
        if (response) {
          res.status(constants.status.internalServerError).json({
            success: false,
            validationError: null,
            error: constants.errors.pokemonExist,
          });
        } else {
          newPokemon
            .save()
            .then(() => {
              res.json({
                success: true,
                validationError: null,
                error: null,
              });
            })
            .catch(() => {
              res.status(constants.status.internalServerError).json({
                success: false,
                validationError: null,
                error: constants.errors.generalError,
              });
            });
        }
      })
      .catch(() =>
        res.status(constants.status.internalServerError).json({
          success: false,
          validationError: null,
          error: constants.errors.generalError,
        })
      );
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
