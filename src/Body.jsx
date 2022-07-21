// In this weather app, I want the user to type a city into the "Body" component and have the weather results for the city display by updating the "Results" component.

// I'm struggling to get the search query into the API call. I'm able to log the city name to the console (letter by letter), but hitting enter to submit it appears to clear the data before it can reach "Results".

import React, { Component } from "react";
import "./App.css";
import Results from "./Results";
import { useState } from "react";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "London" };
  }
  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
    // console.log("handleCityChange city: " + this.state.city);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
    // console.log("handleSubmit: " + this.state.city);
  };

  render() {
    return (
      <div className="Body border">
        <form>
          <label>
            <input
              value={this.state.city}
              onChange={this.handleCityChange}
            ></input>
            <button onClick={this.handleSubmit}>Go</button>
          </label>
        </form>
        <Results cityProp={this.state.city} />
      </div>
    );
  }
}
export default Body;
