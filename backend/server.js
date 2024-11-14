const express = require("express");
const dotenv = require("dotenv");
const gameRoutes = require("./routes/gameRoutes"); // Ensure this path is correct

const app = express();
app.use(express.json());

dotenv.config();

// Use the game routes
app.use("/api/games", gameRoutes); // Ensure this points to the correct route

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
