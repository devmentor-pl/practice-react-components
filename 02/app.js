import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  render() {
    return (
      <button onClick={() => this.increment()}>
        click me ({this.state.amount})
      </button>
    );
  }

  increment() {
    const { amount } = this.state;
    this.setState({ amount: amount + 1 }, () => {
      console.log(this.state.amount);
    });
  }
}

ReactDOM.render(<Counter />, document.querySelector("#root"));
