import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                counter: prevState.counter + 1
            }))

        }, 5000)
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.intervalId)
    }



    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
}

root.render(<App/>);
