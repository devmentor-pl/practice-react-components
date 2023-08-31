import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
	state = {
		counter: 0,
	};
	render() {
		console.log('render');

		return <h1>{this.state.counter}</h1>;
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			const { counter } = this.state;
			this.setState({ counter: counter + 1 });
		}, 1_000);
		console.log('componentDidMount');
	}
    //czy kiedykolwiek ten console.log zostanie wyswietlony?
	componentWillUnmount() {
		clearInterval(this.interval);
		console.log('componentWillUnmount');
	}
}
//
root.render(<App />);
