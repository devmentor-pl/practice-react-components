import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Weather extends React.Component {
  state = {
    data: "",
    key: "1b52412b23054d089f9fdb7574fc589e",
  };
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <section>
          <h2>{data.city_name}</h2>
          <p>{data.temp} C</p>
          <p>{data.weather.description}</p>
        </section>
      );
    }
    return null;
  }
  componentDidMount() {
    this.getWeatherData();
  }
  async getWeatherData() {
    const { longtitude, latitude } = this.props;
    const response = await fetch(
      ` https://api.weatherbit.io/v2.0/current?key=${this.state.key}&lat=${latitude}&lon=${longtitude}`
    );
    const weatherData = await response.json();
    console.log(weatherData.data[0]);
    this.setState({
      data: weatherData.data[0],
    });
  }
}

root.render(
  <Weather
    longtitude={16.57494}
    latitude={51.84034}
  />
);
