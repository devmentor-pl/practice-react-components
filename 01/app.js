import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {

        this.id = setInterval( 
           () => this.setState(
               {counter: this.state.counter +1}
           ), 5000);

           console.log('Component mounted')
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        clearInterval(this.id);
        console.log('Component unmounted');
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));