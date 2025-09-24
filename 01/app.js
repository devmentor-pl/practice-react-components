import React from "react";
import { createRoot } from "react-dom/client";

globalThis.appRoot = createRoot(document.querySelector("#root"));

class App extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    console.log("render");

    return <h1>{this.state.counter}</h1>;
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.id = setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 5000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.id);
  }
}

appRoot.render(<App />);
