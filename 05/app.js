import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {
	constructor() {
		super();
		this.API_KEY = '195f1a7ae96d4ad488f9543021ea79c8';
	}
	state = {
		data: null,
	};

	render() {
		const { data } = this.state;
		console.log(data);

		if (data) {
			const weatherData = data.data[0];
			const weatherIcon = `https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`;

			return (
				<>
					<h1>Informacje o pogodzie</h1>
					<p>Miasto: {weatherData.city_name} </p>
					<p>Temperatura: {weatherData.temp} ºC</p>
					<p>Opis: {weatherData.weather.description}</p>
					<img src={weatherIcon}></img>
				</>
			);
		}

		return null;
	}

	componentDidMount() {
		const { lat, lng } = this.props;
		const url = `https://api.weatherbit.io/v2.0/current?key=${this.API_KEY}&lat=${lat}&lon=${lng}&lang=pl`;

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				return this.setState({
					data: data,
				});
			})
			.catch((err) => console.log(err));
	}
}

root.render(
	<Weather
		lat={52.232222}
		lng={21.008333}
	/>
);
