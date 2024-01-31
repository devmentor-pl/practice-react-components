import React from 'react';
import {createRoot} from 'react-dom/client';
import API from './API';

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {
  state = {
    data: null,
  };
  constructor(props) {
    super(props);

    this.apiKey = '1b4ea2ecd37c4174ac406ce8a2376027';
    this.api = new API(
      `https://api.weatherbit.io/v2.0/current?lat=${props.latitude}&lon=${props.longitude}&key=${this.apiKey}&units=M&lang=pl`
    );
  }
  render() {
    const {data} = this.state;
    const {latitude, longitude} = this.props;
    if (data) {
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

    return null;
  }
  async componentDidMount() {
    const weatherData = await this.api.load();
    return this.setState({data: weatherData});
  }
}

root.render(
  <Weather
    latitude={52.232222}
    longitude={21.008333}
  />
);
