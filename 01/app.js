import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        counter: 0,
        }
    }
    render() {
        console.log('render');
        return <h1>{this.state.counter}</h1>
    }
    componentDidMount() {
        this.id = setInterval(() => {
            const { counter } = this.state;
            this.setState({ counter: counter + 1 })
        }, 5000)
        console.log('component did mount')
    }
    componentDidUpdate() {
        if (this.state.counter === 5) {
            clearInterval(this.id)
        }
        console.log('component did update')
    }
    componentWillUnmount() {
        clearInterval(this.id)
        console.log('component will unmount')
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));