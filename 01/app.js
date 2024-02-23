import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
    state = {
        counter: 0,
    };

    render() {
        console.log("render");

        return <h1>{this.state.counter}</h1>;
    }

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.id = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
            });
        }, 5000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.id);
    }
}

root.render(<App />);
