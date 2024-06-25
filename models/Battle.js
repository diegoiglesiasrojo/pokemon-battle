const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  firstPokemon: {
    type: Object,
    required: true,
  },
  secondPokemon: {
    type: Object,
    required: true,
  },
  turns: { type: Array, default: [] },
  winner: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now() },
});

const Battle = mongoose.model("battle", battleSchema);

module.exports = Battle;
