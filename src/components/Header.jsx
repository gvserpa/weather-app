import earth from "../assets/earth-line.png";
import arrow from "../assets/arrow-down-s-fill.png";
import phone from "../assets/cellphone-line.png";
import user from "../assets/user-fill.png";
import menu from "../assets/menu-line.png";
import search from "../assets/searchb.png";

import React, { useState } from "react";

function Header({ onWeatherData }) {
  const [city, setCity] = useState("");

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  function handleSearch(e) {
    e.preventDefault();

    if (city.trim() === "") return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=en&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        onWeatherData(data);
        setCity("");
      });
  }

  return (
    <>
      <div className="header">
        <h1>TheBestWeather</h1>

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search City or Postcode"
            />
            <button
              type="submit"
              onClick={handleSearch}
              className="btn-icon"
              aria-label="Search"
            >
              <img src={search} alt="Search Icon" />
            </button>
          </form>
        </div>

        <div className="header-btns">
          <div className="temp">
            <img src={earth} alt="Earth Icon" />
            <p>AU | C</p>
          </div>
          <button className="arrow">
            <img src={arrow} alt="Arrow Icon" />
          </button>
          <button className="dln-app">
            <img src={phone} alt="Phone Icon" />
            <p>
              <strong>DOWNLOAD APP</strong>
            </p>
          </button>
          <button className="btn-sign-up">
            <img src={user} alt="User Icon" />
            <p>
              <strong>Sign Up</strong>
            </p>
          </button>
          <button className="header-menu">
            <img src={menu} alt="Menu Icon" />
            <p>Menu</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
