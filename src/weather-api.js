export function fetchCityData(city, key) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q="${city}"&days=3&aqi=no`
  ).then((response) => {
    return response.json();
  });
}

export function processCityData(data) {
  return { forecast: data.forecast, location: data.location };
}
