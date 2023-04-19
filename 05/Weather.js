import React from 'react';
import WeatherAPI from './WeatherAPI';
const weatherApi = new WeatherAPI();

class Weather extends React.Component {
	state = {
		data: null,
	};

	render() {
		const { data } = this.state;

		if (data) {
			const weatherData = data.data[0];
			const weatherIcon = `https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`;

			return (
				<>
					<h1>Informacje o pogodzie</h1>
					<p>Miasto: {weatherData.city_name} </p>
					<p>Temperatura: {weatherData.temp} ºC</p>
					<p>Obecnie: {weatherData.weather.description}</p>
					<img src={weatherIcon}></img>
				</>
			);
		}

		return null;
	}

	componentDidMount() {
		const { lat, lng } = this.props;

		weatherApi.loadData(lat, lng).then((resp) => {
			return this.setState({
				data: resp,
			});
		});
	}
}

export default Weather;
