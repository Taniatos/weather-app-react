import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast-container grid">
      <ul className="daily-forecast">
        <li>Mon</li>
        <li>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/519/original/Frame_19.png?1683850655"
            alt="icon"
            className="icon-forecast"
            id="icon"
          />
        </li>
        <li>19°C</li>
      </ul>
      <ul className="daily-forecast">
        <li>Tue</li>
        <li>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/519/original/Frame_19.png?1683850655"
            alt="icon"
            className="icon-forecast"
            id="icon"
          />
        </li>
        <li>19°C</li>
      </ul>
      <ul className="daily-forecast">
        <li>Wed</li>
        <li>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/519/original/Frame_19.png?1683850655"
            alt="icon"
            className="icon-forecast"
            id="icon"
          />
        </li>
        <li>19°C</li>
      </ul>
      <ul className="daily-forecast">
        <li>Thu</li>
        <li>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/519/original/Frame_19.png?1683850655"
            alt="icon"
            className="icon-forecast"
            id="icon"
          />
        </li>
        <li>19°C</li>
      </ul>
      <ul className="daily-forecast">
        <li>Fri</li>
        <li>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/519/original/Frame_19.png?1683850655"
            alt="icon"
            className="icon-forecast"
            id="icon"
          />
        </li>
        <li>19°C</li>
      </ul>
    </div>
  );
}
