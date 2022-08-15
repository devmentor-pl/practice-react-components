import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }

    constructor(props){
        console.log('constructor')
        super(props)
    }

    render() {
        console.log('render');
        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount(){
        console.log('componentDidMount')
        const {counter} = this.state
        this.id = setInterval(() => {
            this.setState({ counter: counter + 1})
        },5000)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.id)
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));