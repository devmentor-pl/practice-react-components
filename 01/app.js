import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	state = {
		counter: 0,
	};
	constructor(props) {
		super(props);
		console.log("constructor");
	}
	render() {
		console.log("render");

		return <h1>{this.state.counter}</h1>;
	}

	componentDidMount() {
		console.log("componentDidMount");

		this.id = setInterval(() => {
			this.setState({
				counter: this.state.counter + 1,
			});
		}, 1000);
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
		clearInterval(this.id);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
