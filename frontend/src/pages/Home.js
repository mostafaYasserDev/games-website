import React, { useEffect, useState } from "react";
import axios from "axios";
import GameList from "../components/GameList";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get("http://localhost:5000/api/games");
      setGames(response.data);
    };
    fetchGames();
  }, []);

  return (
    <div className="home">
      <GameList games={games} category="Popular" />
      <GameList games={games} category="Action" />
      <GameList games={games} category="Adventure" />
      <GameList games={games} category="Racing" />
    </div>
  );
};

export default Home;
