import React from "react";
import WeatherProvider from "../WeatherProvider";

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    };
  }
  
  componentDidMount() {
    const { lat, lng } = this.props
    const fetchWeather = new WeatherProvider()
    
    fetchWeather.load(lat, lng)
      .then(data => {
        this.setState({ data })
      })
  }

  render() {
    const { data } = this.state

    if(data) {
      return (
        <div>
          <h1>Informacje o pogodzie</h1>
          <p>Temperatura: {data.data[0].temp}°C</p>
          <p>Opis: {data.data[0].weather.description}</p>
        </div>
      )
    }
    return null
  }
}

export default Weather
