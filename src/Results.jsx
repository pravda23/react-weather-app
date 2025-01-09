import React from "react";
import { useState, useEffect } from "react";
import { fetchCityData, processCityData } from "./weather-api.js";
import exportApi from "./config.js";
import "./styles/App.css";

const Results = (props) => {
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    if (props.cityProp === "") {
    } else {
      const getWeather = async () => {
        try {
          const data = await fetchCityData(props.cityProp, exportApi.apiKey);
          const { forecast, location } = processCityData(data);
          setForecast(forecast);
          setLocation(location);
        } catch (err) {
          console.log(err);
        }
      };
      getWeather();
    }
  }, [props.cityProp]);

  // pre-search explainer placeholder text
  if (!props.cityProp) {
    return "";
  }

  return (
    <div>
      <div className="resultHeader">
        {location ? location.name : null}
        {location ? ", " : "City not found"}
        {location ? location.country : null}
      </div>

      <div>
        {forecast && forecast.forecastday
          ? forecast.forecastday.map((item) => {
              return (
                <div className="resultContainer">
                  <div key={item.date_epoch} className="resultDay">
                    <div className="resultDayItem">
                      <li>
                        {new Date(item.date).toLocaleDateString("en-gb", {
                          weekday: "short",
                          month: "long",
                          day: "numeric",
                        })}
                      </li>
                    </div>

                    <div className="resultDayItem">{item.day.maxtemp_c}</div>
                    <div className="resultDayItem">
                      <img
                        alt="weather-icon"
                        className="weatherIcon"
                        src={item.day.condition.icon}
                      ></img>
                    </div>
                    <div className="resultDayItem">
                      {item.day.condition.text}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Results;

// The ternary conditional surrounding renderedContent prevents forecastday from being undefined. The app runs an async api call, but forecastday is called before it can return this data. The conditional logic basically says ignore the renderedContent code block unless there's a change to the state value, originally defined as an empty array in useState([]) and then updated with the api data.

// At one point, the data wasn't being passed to the api call because of the useEffect dependency array (the ",[]" after useEffect). The array tells the program what incoming data to monitor for. Being blank, it didn't understand that it was 'listening' for props.cityProps
