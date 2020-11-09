import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    counter: 0,
  };
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    this.intervalId = setInterval(() => {
      this.setState((state, props) => {
        return {
          counter: state.counter + 1,
        };
      });
    }, 5000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval(this.intervalId);
  }

  render() {
    console.log("render");

    return <h1>{this.state.counter}</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
