const constants = {
  port: 4000,
  errors: {
    generalError: "Unexpected error. Please try later",
    pokemonExist: "Pokemon already exist",
  },
  status: {
    internalServerError: 500,
  },
  routes: {
    pokemon: "/pokemon",
    battle: "/battle",
  },
  validations: {
    nameMinimumCharacters: "Name requires a minimum of 2 characters",
    nameMaximumCharacters: "Name requires a maximum of 40 characters",
    nameRequired: "Name is required",
    numberMinimumValue: "Minimum value must be 0",
    numberMaximumValue: "Maximum value must be 255",
    numberRequired: "Number is required",
    typeMinimumCharacters: "Type requires a minimum of 2 characters",
    typeMaximumCharacters: "Type requires a maximum of 40 characters",
    typeRequired: "Type is required",
    imageUrlMinimumCharacters: "Url image requires a minimum of 2 characters",
    imageUrlMaximumCharacters:
      "Url image requires a maximum of 1000 characters",
    imageUrlRequired: "Url image is required",
  },
};

module.exports = constants;
