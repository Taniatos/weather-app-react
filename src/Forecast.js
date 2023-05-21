import React, { useState, useEffect } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);
   useEffect(() => {
     setLoaded(false);
   }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast-container grid">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return <WeatherForecastDay data={dailyForecast} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "0d8a45bc34b38f19a974t8f13fco40ba";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
