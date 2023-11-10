import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
		this.show = console.log("constructor");
	}

	render() {
		console.log("render");
		return <h1>{this.state.counter}</h1>;
	}

	componentDidMount() {
		console.log("componentDidMount");

		this.component = setInterval(() => {
			const { counter } = this.state;
			this.setState({
				counter: counter + 1,
			});
		}, 5000);
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
		clearInterval(this.component);
	}
}

root.render(<App />);
