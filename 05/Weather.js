import React from 'react';

const API_KEY = '769bfea3884b48e2a12103546232908';
class Weather extends React.Component {
	state = {
		data: '',
	};
	render() {
		const { data } = this.state;
		console.log(data);
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
	componentDidMount() {
		const { city } = this.props;

		fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
			.then(data => data.json())
			.then(data =>
				this.setState({
					data: data,
				})
			)
			.catch(err => console.error(err));
	}
}
export default Weather;
