import React from "react";
import { fetchWeatherData } from "./WeatherApiProvider";

export default class Weather extends React.Component {

  state = {
    data: null
  }

  render() {
    const { data } = this.state;

    if (data) {
      // console.log(data)
      const weatherInfo = data.data[0];
      // console.log(weatherInfo)


      return (
        <article>
          <h1>{weatherInfo.city_name}</h1>
          <p>{weatherInfo.weather.description}</p>
          <p>Temperature: {weatherInfo.temp}°C</p>
        </article>
      )
    }
    return null
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    fetchWeatherData(lat, lng).then(resp => this.setState({ data: resp }));
  }
}