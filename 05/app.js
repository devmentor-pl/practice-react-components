import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {
  state = {
    data: null,
    latitude: this.props.latitude,
    longitude: this.props.longitude,
  };
  constructor(props) {
    super(props);

    this.apiKey = '1b4ea2ecd37c4174ac406ce8a2376027';
  }
  render() {
    const {data, latitude, longitude} = this.state;
    if (data) {
      // renderuj dopiero jak pobierzesz dane z API

      return (
        <div>
          <h1>
            Pogoda dla współrzędnych geograficznych: szerokość{' '}
            <span>{latitude}</span> i długość <span>{longitude}</span>
          </h1>
          <p>Miasto: {data.data[0].city_name}</p>
          <p>Temperatura: {data.data[0].temp} ℃</p>
          <p>Opis: {data.data[0].weather.description}</p>
        </div>
      );
    }

    // nic nie renderuj
    return null;
  }
  async componentDidMount() {
    const {latitude, longitude} = this.state;
    const url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${this.apiKey}&units=M&lang=pl`;
    await this.fetchData(url);
  }
  async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Błąd: ${response.status}`);
      }
      const weatherData = await response.json();
      this.setState({data: weatherData});
      console.log(weatherData);
      return this.setState({data: weatherData});
    } catch (error) {
      console.log('Błąd', error);
    }
  }
}

root.render(
  <Weather
    latitude={52.232222}
    longitude={21.008333}
  />
);
