import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import logo from "../assets/images/logo.png";
const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${search}`);
  };

  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <form>
          <input
            type="text"
            placeholder="Search about games"
            value={search}
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>
            <svg
              width="24"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_494_8)">
                <path
                  d="M26.175 13.75C25.6 8.5375 21.4625 4.4 16.25 3.825V1.25H13.75V3.825C8.5375 4.4 4.4 8.5375 3.825 13.75H1.25V16.25H3.825C4.4 21.4625 8.5375 25.6 13.75 26.175V28.75H16.25V26.175C21.4625 25.6 25.6 21.4625 26.175 16.25H28.75V13.75H26.175ZM15 23.75C10.1625 23.75 6.25 19.8375 6.25 15C6.25 10.1625 10.1625 6.25 15 6.25C19.8375 6.25 23.75 10.1625 23.75 15C23.75 19.8375 19.8375 23.75 15 23.75Z"
                  fill="#E8EAED"
                  fill-opacity="0.3"
                />
              </g>
              <defs>
                <clipPath id="clip0_494_8">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </form>
        <div className="header-right">
          <a href="/">Home</a>
          <a href="/">About Games</a>
          <a id="user" href="/signin">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C10.8833 18 11.7167 17.8708 12.5 17.6125C13.2833 17.3542 14 16.9833 14.65 16.5C14 16.0167 13.2833 15.6458 12.5 15.3875C11.7167 15.1292 10.8833 15 10 15C9.11667 15 8.28333 15.1292 7.5 15.3875C6.71667 15.6458 6 16.0167 5.35 16.5C6 16.9833 6.71667 17.3542 7.5 17.6125C8.28333 17.8708 9.11667 18 10 18ZM10 9C10.4333 9 10.7917 8.85833 11.075 8.575C11.3583 8.29167 11.5 7.93333 11.5 7.5C11.5 7.06667 11.3583 6.70833 11.075 6.425C10.7917 6.14167 10.4333 6 10 6C9.56667 6 9.20833 6.14167 8.925 6.425C8.64167 6.70833 8.5 7.06667 8.5 7.5C8.5 7.93333 8.64167 8.29167 8.925 8.575C9.20833 8.85833 9.56667 9 10 9Z"
                fill="#E8EAED"
              />
            </svg>
            User
          </a>
          <a href="/signin">Currency: US &#11206;</a>
        </div>
      </nav>
      <h1>Quickly find your game using the search bar!</h1>
    </header>
  );
};

export default Header;
