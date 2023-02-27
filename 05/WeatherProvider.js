import React, { Component } from 'react';

export default class Weather extends Component {
	state = {
		data: null,
	};

	render() {
		const { lat, lng } = this.props;
		const { data } = this.state;

		if (data) {
			return (
				<section>
					<p>
						Pogodę w obecnej chwili w miejscu o szerokości geograficznej:
						<strong>{lat}</strong> i długości geograficznej:
						<strong>{lng}</strong> <strong>({data.city})</strong> można określić
						jako: <strong>{data.desc}</strong>, gdzie temperatura wynosi:{' '}
						<strong>{data.temp}</strong>&#8457;
					</p>
				</section>
			);
		} else {
			return null;
		}
	}

	componentDidMount() {
		this.getWeatherData();
	}

	getWeatherData() {
		const { lat, lng } = this.props;
		const API_KEY = 'f93c6d18427e4c79aca3fb72a6ad546f';
		const URL = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lng}&units=I&lang=pl`;

		const promise = fetch(URL);
		promise
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				}
				throw new Error('Brak danych!');
			})
			.then((data) => {
				const copyData = Object.assign({}, ...data.data);
				this.setState({
					data: {
						temp: copyData.temp,
						desc: copyData.weather.description,
						city: copyData.city_name,
					},
				});
			});
	}
}
