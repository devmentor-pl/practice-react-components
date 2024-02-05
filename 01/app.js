import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        this.stopInterval = setInterval(() => {
            const { counter } = this.state;
            this.setState({ counter: counter + 1 }, () => {
                console.log('Callback');
            });
        }, 1000);
        console.log('Component DidMount');
    }

    componentDidUpdate() {
        console.log('Component DidUpdate');
    }

    