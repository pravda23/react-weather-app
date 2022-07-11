import "./App.css";
import React, { useState, useEffect } from "react";

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=47b6acea5d204134b4661938220707&q=London&days=5&aqi=no"
        ).then((response) => {
          response.json().then((data) => {
            setCardData(data);
            // console.log(data.location.name);
          });
        });
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, []);

  // console.log(cardData);
  const forecastDates = cardData.forecast.forecastday.map((day) => {
    console.log(day.date);
  });
  // console.log(forecastDate);

  return (
    <>
      {/* <div>hi</div> */}
      <h2>{cardData.location.name}</h2>
      <h2>
        {cardData.forecast.forecastday[0].date} ........{" "}
        {cardData.current.temp_c}
        {/* {<li>JSON.stringify({forecastDates})</li>} */}
      </h2>
    </>
  );
}

export default Card;
