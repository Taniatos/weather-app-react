import React from "react";
import "./Search.css";
export default function Seacrh() {
  return (
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
  );
}
