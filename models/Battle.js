const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  firstPokemon: {
    type: mongoose.Types.ObjectId,
    ref: "pokemon",
    required: true,
  },
  secondPokemon: {
    type: mongoose.Types.ObjectId,
    ref: "pokemon",
    required: true,
  },
  turns: { type: Array, default: [] },
  result: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now() },
});

const Battle = mongoose.model("battle", battleSchema);

module.exports = Battle;
