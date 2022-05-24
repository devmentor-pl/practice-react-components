import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { counter: 0 }
    console.log('constructorWasCreated')
    }

    render() {
        console.log('wasRendered')
        return <h1>{ this.state.counter }</h1>
        
    }

    componentDidMount() {
        this.id = setInterval(() => {
            const {counter} = this.state;
            this.setState({ counter: counter +1 })
        }, 5000);
        console.log('componentDidMount');
        
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.id);
        console.log('compontentWillUnmount')
    }      
}

ReactDOM.render(<App/>, document.querySelector('#root'));