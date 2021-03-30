import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        console.log(`Constructor I'm run only once`);
        super(props);
        this.increment = () => {this.setState({counter: this.state.counter + 1})};
        this.decrement = () => {this.setState({counter: this.state.counter - 1})};
    }

    state = {
        counter: 0,
    }
    
    componentDidMount() {
        this.id = setInterval(() =>{
            this.setState({counter: this.state.counter + 1});
            console.log('Component Did Mount');
        }, 5000)
    }
    
    
    render() {
        console.log('render');
        return (
            <>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h1>{ this.state.counter }</h1>
            </>
        )
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update')
    }


    componentWillUnmount() {
        clearInterval(this.id);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));