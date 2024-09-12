import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
	state = {
		counter: 0,
	};

	componentDidMount() {
		console.log('componentDidMount');
		this.interval = setInterval(() => {
			this.setState({
				counter: this.state.counter + 1,
			});
		}, 1000);
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
		if (this.state.counter >= 10) {
			root.unmount(); // Symuluje reczne odmontowanie komponentu zeby sprawdzic czy pojawi sie 'componentWillMount' - z uwagi na to przerwanie pojawia sie blad w konsoli ale to tylko symulacja:) bez tego warunku bład nie występuje
		}
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
		clearInterval(this.interval);
	}
	render() {
		console.log('render');

		return <h1>{this.state.counter}</h1>;
	}
}

root.render(<App/>);
