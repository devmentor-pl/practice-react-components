import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    amount: 0,
  };

  handleClick() {
    this.setState((state, props) => {
      return {
        amount: state.amount + 1,
      };
    });
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        click me ({this.state.amount})
      </button>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector("#root"));
