import { forecastCityData, processCityData } from "./weather-api";

it("returns forecast and location from the data given", () => {
  // given an object containing forecast and location

  const obj = {
    forecast: "f",
    location: "l",
  };

  // when processCityData is called on this object

  const result = processCityData(obj);

  // then it returns the contents of forecast and location

  expect(result.forecast).toEqual("f");
  expect(result.location).toEqual("l");
});
