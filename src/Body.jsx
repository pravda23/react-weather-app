import "./App.css";
import Results from "./Results";
import { useState } from "react";

function Body() {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchCity);
  };

  return (
    <div className="Body border">
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
      <Results city={searchCity} />
    </div>
  );
}

export default Body;
