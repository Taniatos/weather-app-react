import React, { useState } from "react";
import "./App.css";
import Forecast from "./Forecast";

import axios from "axios";
export default function Seacrh(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      date: "Thursday 12:30",
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <h1>Your Weather App</h1>
          <div className="Search">
            <form>
              <input
                type="search"
                className="search-city"
                id="city-input"
                placeholder="Enter your city..."
                autocomplete="off"
              />
              <input
                type="submit"
                value="Search"
                className="search-button"
                id="search-button"
              />
            </form>
          </div>
          <div className="city-name grid">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="icon-weather"
              id="icon"
            />
            <h2>{weatherData.city}</h2>
          </div>
          <div className="city-description grid">
            <ul className="description-list">
              <li>{weatherData.date}</li>
              <li>
                {weatherData.description.charAt(0).toUpperCase() +
                  weatherData.description.slice(1)}
              </li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
            <div className="temperature-display grid">
              <ul className="temperature-list">
                <li className="degree">{weatherData.temperature}</li>
                <li className="cels-fahr">
                  <span className="in-celsius">°C</span> | °F
                </li>
              </ul>
            </div>
          </div>
          <Forecast />
          <div className="other-cities">
            <p>
              Check out weather in <a href="https://www.google.com/">Boston</a>
              <a href="https://www.google.com/">Seattle</a>
              <a href="https://www.google.com/">Chicago</a>
              <a href="https://www.google.com/">Houston</a>
            </p>
          </div>
          <p className="footer">
            Open-sourced{" "}
            <a href="https://github.com/Taniatos/weather-app-react.git">code</a>{" "}
            by Tetiana Korchynska
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "0d8a45bc34b38f19a974t8f13fco40ba";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
  }
}
