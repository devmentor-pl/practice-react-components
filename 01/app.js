import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }
    // constructor(props){  
    //     super(props);
    //     this.state = {
    //         counter: 0,
    //     }
    // }

    render() {
        console.log('render');
        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        console.log('komponent zmontowany');
        this.id = setInterval(()=> {
            const {counter} = this.state;
            this.setState({counter: counter + 1})
        }, 5000)
    }
    componentDidUpdate() {
        console.log('komponent zaaktualizowany');
    }
    componentWillUnmount() {
        console.log('komponent odmontowany');
        clearInterval(this.id)
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));