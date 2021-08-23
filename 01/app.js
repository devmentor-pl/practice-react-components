import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        console.log("constructor");
    }
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

    componentDiDUpdate(PrevState) {
        if (this.state.counter !== PrevState) {
            console.log("componentDiDUpdate");
        }
    }
    /* jak zrobic zeby odpalil sie componentDiDUpdate?*/

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.id);
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
/*ReactDOM.unmountComponentAtNode(document.querySelector("#root"));*/
