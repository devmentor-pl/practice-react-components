import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  state = {
    counter: 0,
    intervalId: null,
  };

  componentDidMount() {
    console.log("componentDidMount");

    this.setState({
      intervalId: setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 5000),
    });
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("odmontowane");

    clearInterval(this.state.intervalId);
  }
  render() {
    console.log("render");

    return <h1>{this.state.counter}</h1>;
  }
}

root.render(<App />);
