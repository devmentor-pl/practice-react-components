import React from 'react';
import ReactDOM from 'react-dom';
import { fetchURLWithParameters } from './APIHelper';

class Weather extends React.Component {
  state = {
    geoData: {
      lat: this.props.lat,
      lng: this.props.lng
    }
  }

  render() {
    if (this.state.weatherData) {
      const { lat, lng } = this.state.geoData;
      const { temp, desc } = this.state.weatherData;
      return (
        <>
          <h1>Informacje o pogodzie dla danych geograficznych: {lat}, {lng}.</h1>
          <ul>
            <li>Aura: {desc}</li>
            <li>Temperatura: {temp}</li>
          </ul>
        </>
      )
    }
    return null
  }

  componentDidMount() {
    const { lat, lng } = this.state.geoData
    fetchURLWithParameters(lat, lng)
      .then(({ data: [wheatherData] }) => {
        const { temp, weather: { description } } = wheatherData
        this.setState({
          weatherData: {
            temp: temp,
            desc: description
          }
        })
      })
      .catch(() => console.error('Aby wyświetlnić pogodę, proszę uzupełnić szerokość (lat) i długość (lng) geograficzną w komponencie <Weather>.'))
  }
}

ReactDOM.render(<Weather lat='52.232222' lng='21.008333' />, document.querySelector('#root'));