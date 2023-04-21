import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Weather extends React.Component {
	state = {
		data: [],
		key: "9396da9b853a437199b1f03a5cd706f4",
	};

	render() {
		const { data } = this.state;

		if (data) {
			// renderuj dopiero jak pobierzesz dane z API
			console.log(data);
			return <h1>informacje o pogodzie...</h1>;
		}

		// nic nie renderuj
		return null;
	}

	componentDidMount() {
		const { lat, lng } = this.props;

		const promise = fetch(
			`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${this.state.key}`
		);

		promise.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		});
		// .then(data => {
		// 	this.setState({
		// 		data: data,
		// 	});
		// })
		// .catch(err => console.error(err));
	}
}

root.render(<Weather lat={52.232222} lng={21.008333} />);
