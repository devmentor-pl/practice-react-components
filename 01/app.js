import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    counter: 0,
  };

  render() {
    console.log("render");

    return <h1>{this.state.counter}</h1>;
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 5000);
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.id);
    console.log("componentWillUnmount");
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
