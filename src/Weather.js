import React from "react";
import "./App.css";
import WeatherTemperature from "./WeatherTemperature"
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-name grid">
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="icon-weather"
          id="icon"
        />
        <h2>{props.data.city}</h2>
      </div>
      <div className="city-description grid">
        <ul className="description-list">
          <li><FormattedDate date={props.data.date}/></li>
          <li>
            {props.data.description.charAt(0).toUpperCase() +
              props.data.description.slice(1)}
          </li>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>

        <div className="temperature-display grid">
          <WeatherTemperature degree={props.data.temperature} />
          
        </div>
      </div>
    </div>
  );
}
