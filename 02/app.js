import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  render() {
    return <button ref={(button) => (this.button = button)}>click me ({this.state.amount})</button>;
  }

  componentDidMount() {
    this.button.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    this.button.removeEventListener("click", this.handleClick);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      amount: prevState.amount + 1,
    }));
  };
}

root.render(<Counter />);
