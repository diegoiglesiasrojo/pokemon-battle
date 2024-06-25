const joi = require("joi");
const constants = require("../constants");

const battleValidator = (req, res, next) => {
  const schema = joi.object({
    firstPokemon: joi.string().trim().min(2).max(40).required().messages({
      "string.min": constants.validations.nameMinimumCharacters,
      "string.max": constants.validations.nameMaximumCharacters,
      "any.required": constants.validations.nameRequired,
    }),
    secondPokemon: joi.string().trim().min(2).max(40).required().messages({
      "string.min": constants.validations.nameMinimumCharacters,
      "string.max": constants.validations.nameMaximumCharacters,
      "any.required": constants.validations.nameRequired,
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

module.exports = battleValidator;
