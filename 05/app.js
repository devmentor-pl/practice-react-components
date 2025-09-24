import React from "react";
import { createRoot } from "react-dom/client";
import { apiKey } from "../secret";

const root = createRoot(document.querySelector("#root"));
const latitude = "50.061389";
const longitude = "19.938333";
const apiUrl = "https://api.weatherbit.io/v2.0/current";

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    weatherResponse: null,
  };
  getWeather = async () => {
    const params = {
      lat: this.props.latitude,
      lon: this.props.longitude,
      key: apiKey,
    };
    const url = new URL(apiUrl);
    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    this.setState({ weatherResponse: data });
  };

  renderTable = () => {
    const { city_name, temp, sunrise, sunset, wind_spd, wind_cdir } =
      this.state.weatherResponse.data[0];
    return (
      <table>
        <caption>Weather</caption>
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temp</th>
            <th scope="col">Sunrise</th>
            <th scope="col">Sunset</th>
            <th scope="col">Wind speed</th>
            <th scope="col">Wind direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{city_name}</td>
            <td>{temp}°C</td>
            <td>{sunrise}</td>
            <td>{sunset}</td>
            <td>{wind_spd} m/s</td>
            <td>{wind_cdir}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  render() {
    return (
      <>
        {this.state.weatherResponse && this.renderTable()}
        <button onClick={this.getWeather}>Get Weather</button>
      </>
    );
  }
}

root.render(<App latitude={latitude} longitude={longitude} />);
