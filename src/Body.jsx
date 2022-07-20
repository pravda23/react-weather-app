import "./App.css";
import Results from "./Results";
import { useState } from "react";

function Body() {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = { searchCity };
  };

  return (
    <div className="Body border">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <label>
          <input
            value={searchCity}
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          ></input>
          <button type="submit">Go</button>
        </label>
      </form>
      <Results cityProp={searchCity} />
    </div>
  );
}

export default Body;
