const joi = require("joi");
const constants = require("../constants");

const pokemonValidator = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().trim().min(2).max(40).required().messages({
      "string.min": constants.validations.nameMinimumCharacters,
      "string.max": constants.validations.nameMaximumCharacters,
      "any.required": constants.validations.nameRequired,
    }),
    attack: joi.number().min(0).max(255).required().messages({
      "number.min": constants.validations.numberMinimumValue,
      "number.max": constants.validations.numberMaximumValue,
      "any.required": constants.validations.numberRequired,
    }),
    defense: joi.number().min(0).max(255).required().messages({
      "number.min": constants.validations.numberMinimumValue,
      "number.max": constants.validations.numberMaximumValue,
      "any.required": constants.validations.numberRequired,
    }),
    hp: joi.number().min(0).max(255).required().messages({
      "number.min": constants.validations.numberMinimumValue,
      "number.max": constants.validations.numberMaximumValue,
      "any.required": constants.validations.numberRequired,
    }),
    speed: joi.number().min(0).max(255).required().messages({
      "number.min": constants.validations.numberMinimumValue,
      "number.max": constants.validations.numberMaximumValue,
      "any.required": constants.validations.numberRequired,
    }),
    type: joi.string().trim().min(2).max(40).required().messages({
      "string.min": constants.validations.typeMinimumCharacters,
      "string.max": constants.validations.typeMaximumCharacters,
      "any.required": constants.validations.typeRequired,
    }),
    imageUrl: joi.string().trim().min(2).max(1000).required().messages({
      "string.min": constants.validations.imageUrlMinimumCharacters,
      "string.max": constants.validations.imageUrlMaximumCharacters,
      "any.required": constants.validations.imageUrlRequired,
    }),
  });
  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.status(constants.status.internalServerError).json({
      success: false,
      validationError: validation.error.details,
      error: constants.errors.generalError,
    });
  }
};

module.exports = pokemonValidator;
