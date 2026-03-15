import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    counter: 0,
  };
  render() {
    console.log("render");
    return <h1>{this.state.counter}</h1>;
  }
  componentDidMount() {
    console.log("Component was mounted");
    this.intervalId = setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 5 * 1000);
  }
  componentDidUpdate() {
    console.log("Component was updated");
  }
  componentWillUnmount() {
    console.log("Component will be unmounted");
    clearInterval(this.intervalId);
  }
}

root.render(<App />);
