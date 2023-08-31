import React from 'react';
import { get } from './WeatherAPI';

class Weather extends React.Component {
	state = {
		data: '',
	};
	componentDidMount() {
		const { city } = this.props;
		get(`${city}`).then(data =>
			this.setState({
				data: data,
			})
		);
	}
	render() {
		const { data } = this.state;
		if (data) {
			// renderuj dopiero jak pobierzesz dane z API
			return (
				<h1>
					temperature in {data.location.name} is {data.current.temp_c} ° C
				</h1>
			);
		}
		// nic nie renderuj
		return null;
	}
}
export default Weather;
