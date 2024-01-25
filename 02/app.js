import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  clickHandler = (e) => {
    this.addAmount(e);
  };
  addAmount = (e) => {
    const {amount} = this.state;
    this.setState({amount: amount + 1});
  };

  render() {
    return (
      <button onClick={this.clickHandler}>
        click me ({this.state.amount})
      </button>
    );
  }
}

root.render(<Counter />);
