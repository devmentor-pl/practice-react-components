import React from 'react';
import ReactDOM from 'react-dom';

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
    this.fetchURLWithParameters(lat, lng)
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

  async fetchURLWithParameters(lat, lng) {
    const url = `https://api.weatherbit.io/v2.0/current?key=35352f1c52b84dfbb0efc4302767cf8f&lat=${lat}&lon=${lng}&lang=pl`

    const res = await fetch(url);
    return await (res.ok ? res.json() : Promise.reject(res));
  }

}

ReactDOM.render(<Weather lat='52.232222' lng='21.008333' />, document.querySelector('#root'));