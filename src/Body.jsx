import React, { Component } from "react";
import "./App.css";
import Results from "./Results";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
  }
  handleCityChange = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
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
          </label>
        </form>
        <Results cityProp={this.state.city} />
      </div>
    );
  }
}
export default Body;
