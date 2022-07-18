import "./App.css";
import React from "react";
import { useState } from "react";
import Results from "./Results";

function Search() {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {};

  return (
    <div>
      <form className="SearchForm">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search city"
          value={input}
        ></input>
      </form>
    </div>
  );
}

export default Search;
