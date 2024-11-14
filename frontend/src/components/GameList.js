import React from "react";
import "../styles.css";

const GameList = ({ games, category }) => {
  const filteredGames = games.filter((game) =>
    game.category.includes(category)
  );

  return (
    <div className="game-list">
      <h2>{category} Games</h2>
      <div className="game-grid">
        {filteredGames.map((game) => (
          <div key={game._id} className="game-card">
            <img src={game.image} alt={game.title} />
            <div className="game-details">
              <h3>{game.title}</h3>
              <p>${game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
