import React from "react";
import { createRoot } from "react-dom/client";
import { getWeatherData } from "./getWeatherData";

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

		getWeatherData(lat, lng, key).then(json => {
			this.setState({
				data: json.data[0],
			});
		});
	}
}

root.render(<Weather lat={52.232222} lng={21.008333} />);
