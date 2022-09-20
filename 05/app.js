import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Weather extends React.Component {
	state = {
		data: null,
	};

	render() {
		const { data } = this.state;
		if (data) {
			const { city_name, weather, temp } = this.state.data;
			return <h1>{`Pogoda w miejscowości ${city_name}: ${weather.description}, temperatura: ${temp} st. C`}</h1>;
		}
		return null;
	}

	componentDidMount() {
		const { lat, lng } = this.props;
		const key = '6605418839c74dae93491ed964ff73a0';
		const url = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl`;
		const promise = fetch(url);
		promise
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
				if (resp.status === 400) {
					return Promise.reject('Błędne żądanie!');
				}
				return Promise.reject(resp);
			})
			.then(data => this.setData(data.data[0]))
			.catch(err => console.log(err));
	}

	setData = data => {
		this.setState({ data: data });
	};
}

ReactDOM.render(<Weather lat={52.2322222} lng={21.008333} />, document.querySelector('#root'));
