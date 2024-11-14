import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((category) => category !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the form sends the complete data
    const newGame = {
      title: title,
      image: image,
      price: price,
      categories: categories,
    };

    try {
      // Send the request to the correct backend API
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/games", // Check the API URL
        newGame, // Payload to be sent
        { headers: { Authorization: `Bearer ${token}` } } // Send JWT token
      );
      alert("Game added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add game");
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Add New Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <div className="categories">
          <label>
            <input
              type="checkbox"
              value="Action"
              onChange={handleCategoryChange}
            />
            Action
          </label>
          <label>
            <input
              type="checkbox"
              value="Adventure"
              onChange={handleCategoryChange}
            />
            Adventure
          </label>
          <label>
            <input
              type="checkbox"
              value="Racing"
              onChange={handleCategoryChange}
            />
            Racing
          </label>
          <label>
            <input
              type="checkbox"
              value="Popular"
              onChange={handleCategoryChange}
            />
            Popular
          </label>
        </div>

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
