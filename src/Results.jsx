// TO DO: user inputs city name, which then updates Results component placeholder with api call weather data

// TO DO: pre-search placeholder text within results area

import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

const Results = (props) => {
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState([]);
  const [cityProp, setCityProp] = useState([]);

  console.log("props.cityProp: " + props.cityProp);

  useEffect(() => {
    const getWeather = async () => {
      try {
        fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=47b6acea5d204134b4661938220707&q="${props.cityProp}"&days=3&aqi=no`
        ).then((response) => {
          response.json().then((data) => {
            setForecast(data.forecast);
            setLocation(data.location);
            setCityProp(props.cityProp);
          });
        });
      } catch (err) {
        console.log("Error");
      }
    };
    getWeather();
  }, [props.cityProp]);

  const renderedContent = forecast.forecastday
    ? forecast.forecastday.map((item) => {
        return (
          <div key={item.date_epoch} className="dateTempContainer">
            <div className="dateContainer">
              <li>
                {new Date(item.date).toLocaleDateString("en-gb", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                })}
              </li>
            </div>

            <div className="tempContainer">{item.day.maxtemp_c}</div>
          </div>
        );
      })
    : null;

  return (
    <div>
      <h2>
        {location.name}, {location.country}
      </h2>

      <div>{renderedContent}</div>
    </div>
  );
};

export default Results;

// // What is the ternary conditional surrounding renderedContent? This prevents forecastday from being undefined. The app runs an async function api call, but forecastday is called before it can return this data. The conditional logic basically says ignore the renderedContent code block unless there's a change to the state value, originally defined as an empty array in useState([]) and then updated with the api data.
