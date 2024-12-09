import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  // state = {
  //     counter: 0,
  // }
  render() {
    console.log("render");

    return <h1>{this.state.counter}</h1>;
  }

  componentDidMount() {
    console.log("DidMount");
    this.id = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("DidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }
}

root.render(<App />);
