import "./App.css";
import Results from "./Results";
import Search from "./Search";
import { useState } from "react";

function Body() {
  const [search, setSearch] = useState([]);

  return (
    <div className="Body border">
      <Search setSearch={setSearch} />
      <Results />
    </div>
  );
}

export default Body;
