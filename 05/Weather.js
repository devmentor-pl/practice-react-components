'use strict';
import React from 'react';
import WeatherDayLength from './WeatherDayLength';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    const apiKey = '338f265a980b48e19459c7cf7fb34484';
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl`;

    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => this.setState({ data }))
      .catch((err) => console.error('Error fetching ata: ', err));
  }

  render() {
    const { data } = this.state;
    if (data) {
      const divStyles = {
        border: '5px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
      };
      const { city_name, temp, sunrise, sunset } = data.data[0];
      return (
        <div style={divStyles}>
          <h2>Informacja o pogodzie</h2>
          <p>Miasto: {city_name}</p>
          <p>Temperatura: {temp} °C</p>
          <WeatherDayLength sunrise={sunrise} sunset={sunset} />
          <p>Wschód słońca: {sunrise} </p>
          <p>Zachód słońca: {sunset} </p>
        </div>
      );
    }
    return null;
  }
}

export default Weather;
