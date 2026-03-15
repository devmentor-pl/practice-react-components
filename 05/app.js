import React, { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Weather extends React.Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    console.log("Component mounted");
    this.fetchWeather(this.lat, this.lon);

    // fetch weatcher API key: 96f9e2dc4a46475d8297ec40d8c05143
    // fetch example :https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY
  }

  fetchWeather = async () => {
    try {
      const API_KEY = "96f9e2dc4a46475d8297ec40d8c05143";
      const { lat, lon } = this.props;
      const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      console.log("API response:", data);

      this.setState({
        data: data,
        loading: false,
      });
    } catch (error) {
      console.error("Fetch error", error);
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  };

  render() {
    const { data, loading, error } = this.state;

    //Loading
    if (loading) {
      return <div>Loading data, please wait ...</div>;
    }

    if (error) {
      return <div>Fetching error</div>;
    }

    if (!data) {
      return <div>No data to render</div>;
    }

    const weatherData = data.data[0];

    return (
      <div>
        <h1>
          Pogoda w {weatherData.city_name}, {weatherData.country_code}
        </h1>
        <p>Temperatura: {weatherData.temp}°C</p>
        <p>Opis: {weatherData.weather.description}</p>
        <p>Wiatr: {weatherData.wind_spd} km/h</p>
        <p>Zachmurzenie: {weatherData.clouds}%</p>
      </div>
    );
  }
}

root.render(
  <>
    <Weather lat={52.232222} lon={21.008333} />
    <Weather lat={50.061389} lon={19.938333} />
    <Weather lat={51.11} lon={17.022222} />
  </>,
);

// Warszawa: 52.232222, 21.008333,
// Kraków: 50.061389, 19.938333,
// Wrocław: 51.11, 17.022222.
