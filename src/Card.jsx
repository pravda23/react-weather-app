import "./App.css";

function Card() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=47b6acea5d204134b4661938220707&q=Batumi&aqi=no"
  ).then((response) => {
    response.json().then((json) => console.log(json));
  });
  return (
    <>
      <div className="Card border">
        <div>Card header</div>
        <div></div>
      </div>
    </>
  );
}

export default Card;
