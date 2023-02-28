import React, { Component } from 'react';
import getWeatherData from './getWeatherData';

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
		const { lat, lng } = this.props;

		getWeatherData(lat, lng)
			.then((data) => {
				const copyData = Object.assign({}, ...data.data);
				this.setState({
					data: {
						temp: copyData.temp,
						desc: copyData.weather.description,
						city: copyData.city_name,
					},
				});
			})
			.catch((err) => console.log(err));
	}
}
