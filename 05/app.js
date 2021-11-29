import React from 'react';
import ReactDOM from 'react-dom';
import Api from './Api'


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null
        }
    };

    render() {

        const { weatherData } = this.state;

        if( weatherData ) {
            return(
                <div>
                    <h1>Informacje o pogodzie:</h1>
                    <p>Miasto: {weatherData.city_name}</p>
                    <p>Temperatura: {weatherData.temp} (°C)</p>
                    <p>Ciśnienie: {weatherData.pres} (mb) </p>
                    <p>Przejrzystość nieba: {weatherData.weather.description } </p>
                    <p>Wschód Słońca: {weatherData.sunrise}</p>
                    <p>Zachód Słońca: {weatherData.sunset}</p>
                    <p></p>
                </div>
            )
        } else {
            return null;
        }

  }

  componentDidMount() {
      const {lat, lon} = this.props;
      const api = new Api(lat, lon);

      api.getWeatherData()
        .then( data => this.setState( { weatherData: data.data[0] } ))
  }
}

ReactDOM.render(
    <>
        <Weather lat = {51.11} lon = {17.02} />,
        <Weather lat = {50.06} lon = {19.93} />,
    </>,
    document.querySelector('#root')
);