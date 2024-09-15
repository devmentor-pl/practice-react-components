import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        console.log('component did mount');
        this.id = setInterval(() => {
            const {counter} = this.state;
            this.setState({counter: counter + 1})
        }, 5000)
    }
    componentDidUpdate() {
        console.log('component did update');
    }
    componentWillUnmount() {
        console.log('component will unmount')
        clearInterval(this.id);
    }
}

root.render(<App/>);
