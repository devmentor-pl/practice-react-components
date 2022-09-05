import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    /*state = {
        counter: 0,
    }*/

    constructor(props) {
        super(props);
        this.state = { counter: 8 }
        console.log('constructor')
    }

    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        console.log('componentDidMount');
        const {counter} = this.state;
        this.setState({
            counter: counter + 1,
            }, () => {
                console.log(this.state.counter)
        }) 
    }

    /*componentDidMount() {
        console.log('componentDidMount');
        this.id = setInterval(() => {
            const {counter} = this.state;
            this.setState({counter: counter+1})
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval( this.id );
        }*/

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }






}

ReactDOM.render(<App/>, document.querySelector('#root'));