import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    console.log('render');

    return <h1>{this.state.counter}</h1>;
  }

  componentDidMount() {
    console.log('[APP] componentDidMount');

    this.interval = setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 5000);
  }

  componentDidUpdate() {
    console.log('[APP] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[APP] componentWillUnmount');
    clearInterval(this.interval);
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
