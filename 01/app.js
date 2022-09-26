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
        console.log('componentDidMound')
        this.timerID = setInterval(() => {
            const {counter} = this.state;
            this.setState({counter: counter +1})
        }, 5000);
      }
    
      componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerID);
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));