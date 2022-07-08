import "./App.css";
import React, { useState, useEffect } from "react";

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const api = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=47b6acea5d204134b4661938220707&q=Cape_Town&aqi=no"
        );
        const data = await api.json();
        console.log(data);
        setCardData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, []);

  return (
    <div>
      <h1>{cardData.location.name}</h1>
      <h1>{cardData.current.temp_c}</h1>
    </div>
  );
}

export default Card;
