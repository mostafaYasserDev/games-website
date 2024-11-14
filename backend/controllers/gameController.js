// controllers/gameController.js

// Get all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find({});
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Add a new game
const addGame = async (req, res) => {
  const { title, image, price, categories } = req.body;

  if (!title || !image || !price || !categories) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newGame = new Game({
      title,
      image,
      price,
      categories,
    });

    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getGames, addGame };
