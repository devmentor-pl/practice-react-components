import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
        this.addOne = this.addOne.bind(this);
    }

    addOne() {
        let newAmount = this.state.amount + 1;
        this.setState({ amount: newAmount });
    }

    render() {
        return (
            <button onClick={this.addOne}>
                click me ({this.state.amount})
            </button>
        );
    }
}

ReactDOM.render(<Counter />, document.querySelector("#root"));
