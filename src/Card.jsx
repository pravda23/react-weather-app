import "./App.css";
import React, { useState, useEffect } from "react";

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const api = await fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=47b6acea5d204134b4661938220707&q=London&days=5&aqi=no"
        );
        const data = await api.json();
        // console.log(data.forecast.forecastday[0].date);
        // console.log(data.forecast.forecastday[1]);

        setCardData(data.forecast.forecastday[0]);
        console.log(data.forecast.forecastday[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, []);

  return (
    <>
      <div>{cardData.date}</div>
    </>
  );
}

export default Card;
