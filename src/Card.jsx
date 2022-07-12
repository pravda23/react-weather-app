import "./App.css";
import React, { useState, useEffect } from "react";

function Forecast() {
  const [forecastData, setForecastData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=47b6acea5d204134b4661938220707&q=London&days=5&aqi=no"
        ).then((response) => {
          response.json().then((data) => {
            setForecastData(data.forecast);
            setLocationData(data.location);

            // console.log(data.location.name);
          });
        });
      } catch (err) {
        console.log("Error");
      }
    };
    getWeather();
  }, []);

  const renderedContent = forecastData.forecastday.map((item) => {
    return (
      <>
        <div className="dateTempContainer">
          <div className="dateContainer">
            <li key={item.date_epoch}>
              {new Date(item.date).toLocaleDateString("en-gb", {
                weekday: "short",
                month: "long",
                day: "numeric",
              })}
            </li>
          </div>
          <div className="tempContainer" key={item.date_epoch}>
            {item.day.maxtemp_c}
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <h2>{locationData.name}</h2>
      <div>{renderedContent}</div>
    </>
  );
}

export default Forecast;
