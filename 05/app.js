import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Weather extends React.Component {
	state = {
		data: [],
		key: "fb1f270ee105461baf6d3b0c0e13aa7b",
	};

	render() {
		const { data } = this.state;

		if (data && data.weather) {
			return (
				<section>
					<h1>Weather in {data.city_name}:</h1>
					<p>Description: {data.weather.description}</p>
					<p>Temperature: {data.temp}</p>
				</section>
			);
		}

		return null;
	}

	componentDidMount() {
		const { lat, lng } = this.props;
		const { key } = this.state;
		const promise = fetch(
			`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${key}`
		);

		promise
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			.then(json => {
				this.setState({
					data: json.data[0],
				});
			})
			.catch(err => console.error(err));
	}
}

root.render(<Weather lat={52.232222} lng={21.008333} />);
