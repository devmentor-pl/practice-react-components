// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     state = {
//         counter: 0,
//     }
//     render() {
//         console.log('render');

//         return <h1>{ this.state.counter }</h1>
//     }
// }

// ReactDOM.render(<App/>, document.querySelector('#root'));




import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }

   
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    
    componentDidMount() {
        // console.log('Komponent został zmontowany')
        this.id = setInterval(() => {
            const {counter} = this.state;
            this.setState({ counter: counter + 1 })
        }, 5000);
    }
    componentDidUpdate() {
        console.log('komponent został zamontowany');
    }

    componentWillUnmount() {
        console.log('Komunikat po aktualizacji')
        clearInterval(this.id);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));