const constants = require("../constants");
const Battle = require("../models/Battle");
const Pokemon = require("../models/Pokemon");
const battleCalculator = require("../services/battleCalculator.services");

const battleControllers = {
  createBattle: (req, res) => {
    const { firstPokemon, secondPokemon } = req.body;

    const firstPokemonCapitalized =
      firstPokemon.toLowerCase().charAt(0).toUpperCase() +
      firstPokemon.toLowerCase().slice(1);

    const secondPokemonCapitalized =
      secondPokemon.toLowerCase().charAt(0).toUpperCase() +
      secondPokemon.toLowerCase().slice(1);

    Pokemon.findOne({ name: firstPokemonCapitalized })
      .then((firstPokemonObj) => {
        if (firstPokemonObj) {
          Pokemon.findOne({ name: secondPokemonCapitalized })
            .then((secondPokemonObj) => {
              if (secondPokemonObj) {
                const { turns, winner } = battleCalculator(
                  firstPokemonObj,
                  secondPokemonObj
                );
                const newBattle = new Battle({
                  firstPokemon: firstPokemonObj,
                  secondPokemon: secondPokemonObj,
                  turns,
                  winner,
                });
                newBattle
                  .save()
                  .then(() => {
                    res.json({
                      success: true,
                      error: null,
                      response: newBattle,
                    });
                  })
                  .catch(() => {
                    res.status(constants.status.internalServerError).json({
                      success: false,
                      validationError: null,
                      error: constants.errors.generalError,
                    });
                  });
              } else {
                res.status(constants.status.internalServerError).json({
                  success: false,
                  validationError: null,
                  error: constants.errors.pokemonNotFound,
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
        } else {
          res.status(constants.status.internalServerError).json({
            success: false,
            validationError: null,
            error: constants.errors.pokemonNotFound,
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
  readBattleList: (req, res) => {
    Battle.find()
      .then((listOfBattles) => {
        res.json({
          success: true,
          error: null,
          response: listOfBattles,
        });
      })
      .catch(() => {
        res
          .status(constants.status.internalServerError)
          .json({ success: false, error: constants.errors.generalError });
      });
  },
};

module.exports = battleControllers;
