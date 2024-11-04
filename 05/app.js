import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const API_KEY = "4dd677db47104eaab7a3227c27cb14b4";

class Weather extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const { lat, lng } = this.props;
    const url = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lng}&lang=pl`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.data[0] });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }

  render() {
    const { data } = this.state;

    if (data) {
      return (
        <div>
          <h1>Pogoda dla lokalizacji:</h1>
          <p>Miasto: {data.city_name}</p>
          <p>Temperatura: {data.temp}°C</p>
          <p>Opis: {data.weather.description}</p>
          <p>Wilgotność: {data.rh}%</p>
          <p>Prędkość wiatru: {data.wind_spd} m/s</p>
        </div>
      );
    }

    return <p>Ładowanie danych o pogodzie...</p>;
  }
}

root.render(<Weather lat={52.232222} lng={21.008333} />);
