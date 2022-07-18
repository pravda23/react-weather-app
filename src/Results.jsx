import "./App.css";
import React, { useState, useEffect } from "react";

function Results() {
  const [forecastData, setForecastData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=47b6acea5d204134b4661938220707&q=Batumi&days=3&aqi=no"
        ).then((response) => {
          response.json().then((data) => {
            setForecastData(data.forecast);
            setLocationData(data.location);
          });
        });
      } catch (err) {
        console.log("Error");
      }
    };
    getWeather();
  }, []);

  const renderedContent = forecastData.forecastday
    ? forecastData.forecastday.map((item) => {
        // console.log(item.date_epoch);
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
    <>
      <h2>{locationData.name}</h2>
      <div>{renderedContent}</div>
    </>
  );
}

export default Results;

// What is the ternary conditional surrounding renderedContent? This prevents forecastday from being undefined. The app runs an async function api call, but forecastday is called before it can return this data. The conditional logic basically says ignore the renderedContent code block unless there's a change to the state value, originally defined as an empty array in useState([]) and then updated with the api data.
