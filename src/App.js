import React from "react";
import "./App.css";
import Search from "./Search.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Your Weather App</h1>
        <Search />
        <div className="city-name grid">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/519/original/Frame_19.png?1683850655"
            alt="icon"
            className="icon-weather"
            id="icon"
          />
          <h2>New York</h2>
        </div>
        <div className="city-description grid">
          <ul className="description-list">
            <li>Thursday 12:34</li>
            <li>Mostly sunny</li>
            <li>Humidity: 20%</li>
            <li>Wind: 5km/h</li>
          </ul>
          <div className="temtarature--display grid">
            <ul className="temperature-list">
              <li className="degree">10</li>
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
}
