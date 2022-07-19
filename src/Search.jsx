// TO DO: user inputs city name, which then updates Results component placeholder with api call weather data

import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function Search() {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // set a value here that we can import into Results
  };

  return (
    <div>
      <form className="SearchForm">
        <input
          type="text"
          value={searchCity}
          placeholder="Search city"
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit}>Go</button>
      </form>
    </div>
  );
}

export default Search;
