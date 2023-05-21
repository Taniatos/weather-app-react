import React, { useState } from "react";
import "./App.css";
import Forecast from "./Forecast";
import Weather from "./Weather";

import axios from "axios";
export default function Seacrh(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const[city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      date: new Date (response.data.time * 1000),
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
    });
  }
  function search() {
    const apiKey = "0d8a45bc34b38f19a974t8f13fco40ba";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <h1>Your Weather App</h1>
          <div className="Search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="search-city"
                placeholder="Enter your city..."
                autocomplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="search-button"
                id="search-button"
              />
            </form>
          </div>
          <Weather data={weatherData} />
          <Forecast city={weatherData.city} />
          <div className="other-cities">
            <p>
              Check out weather in <a href="https://www.google.com/">Boston</a>
              <a href="https://www.google.com/">Seattle</a>
              <a href="https://www.google.com/">Chicago</a>
              <a href="https://www.google.com/">Houston</a>
            </p>
          </div>
          <div className="footer">
            <p>
              Open-sourced{" "}
              <a href="https://github.com/Taniatos/weather-app-react.git">
                code
              </a>{" "}
              by Tetiana Korchynska
            </p>
          </div>
        </div>
      </div>
    );
    
  } else {
    search();
    return "Loading ...";
  }
}
