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
    const body = { ...req.body };
    if (body.name) {
      const nameCapitalized =
        body.name.toLowerCase().charAt(0).toUpperCase() +
        body.name.toLowerCase().slice(1);
      body.name = nameCapitalized;
    }

    if (body.type) {
      const typeCapitalized =
        body.type.toLowerCase().charAt(0).toUpperCase() +
        body.type.toLowerCase().slice(1);
      body.type = typeCapitalized;
    }

    Pokemon.findOneAndUpdate({ _id: req.params.id }, { ...body })
      .then(() => {
        res.json({
          success: true,
          error: null,
        });
      })
      .catch(() => {
        res
          .status(constants.status.internalServerError)
          .json({ success: false, error: constants.errors.generalError });
      });
  },

  deletePokemon: (req, res) => {
    Pokemon.findOneAndDelete({ _id: req.params.id })
      .then(() => {
        res.json({
          success: true,
          error: null,
        });
      })
      .catch(() => {
        res
          .status(constants.status.internalServerError)
          .json({ success: false, error: constants.errors.generalError });
      });
  },

  readPokemonList: (req, res) => {
    Pokemon.find()
      .then((listOfPokemons) => {
        res.json({
          success: true,
          error: null,
          response: listOfPokemons,
        });
      })
      .catch(() => {
        res
          .status(constants.status.internalServerError)
          .json({ success: false, error: constants.errors.generalError });
      });
  },

  readPokemonById: (req, res) => {
    Pokemon.findOne({ _id: req.params.id })
      .then((response) => {
        res.json({
          success: true,
          error: null,
          response,
        });
      })
      .catch(() => {
        res
          .status(constants.status.internalServerError)
          .json({ success: false, error: constants.errors.generalError });
      });
  },
};

module.exports = pokemonControllers;
