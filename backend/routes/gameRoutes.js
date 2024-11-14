const express = require("express");
const router = express.Router();
const { getGames, addGame } = require("../controllers/gameController"); // Ensure these functions are correctly imported

// @route GET /api/games
// @desc Get all games
router.get("/", getGames);

// @route POST /api/games
// @desc Add a new game
router.post("/", addGame);

module.exports = router;
