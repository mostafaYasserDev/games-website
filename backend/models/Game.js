const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  categories: [{ type: String, required: true }], // Updated to array of strings
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
