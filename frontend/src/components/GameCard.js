import React from "react";
import "../styles.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card" title={game.title}>
      <img src={game.image} alt={game.title} />
      <div className="game-info">
        <span>${game.price}</span>
      </div>
    </div>
  );
};

export default GameCard;
