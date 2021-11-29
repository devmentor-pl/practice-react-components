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

    componentDidUpdate(PrevState) {
        if (this.props.counter !== PrevState) {
            console.log("componentDiDUpdate");
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.id);
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
/*ReactDOM.unmountComponentAtNode(document.querySelector("#root"));*/
