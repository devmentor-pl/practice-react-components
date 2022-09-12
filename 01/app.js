import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    counter: 0,
  };
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render");

    return <h1>{this.state.counter}</h1>;
  }
  componentDidMount() {
    this.id = setInterval(() => {
      const { counter } = this.state;
      this.setState({
        counter: counter + 5,
      });
      if (counter >= 10) {
        clearInterval(this.id);
      }
      console.log("Component did mount!");
    }, 2000);
  }
  componentDidUpdate() {
    console.log("Component did update!");
  }
  componentWillUnmount() {
    console.log("Component did unmount!");
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
