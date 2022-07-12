import "./App.css";
import React, { useState, useEffect } from "react";

function Forecast() {
  const [forecastData, setForecastData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [error, setError] = useState();

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
        console.log(setError(err));
      }
    };
    getWeather();
  }, []);

  const renderedContent = forecastData.forecastday.map((i) => {
    return <li>{i.date}</li>;
  });

  return (
    <>
      {/* <p>{locationData.name}</p> */}
      <p>{renderedContent}</p>
    </>
  );
}

export default Forecast;
