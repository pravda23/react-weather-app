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
  // console.log(cardData.forecast.forecastday);

  const mapped = cardData.forecast.forecastday.map((item) => {
    console.log(item.date);
  });

  // const renderedData = cardData.location.name;
  // console.log(renderedData);

  return (
    <>
      <div>content</div>
      {/* <div>{cardData.current.temp_c}</div>
      <div>{cardData.forecast.forecastday[0].maxtemp_c}</div> */}
    </>
  );
}

export default Card;
