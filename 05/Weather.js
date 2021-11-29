import React from "react";
import ReactDOM from "react-dom";

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                W miescie {this.props.city} jest obecnie{" "}
                {this.props.conditions.toLowerCase()}, a temperatura wynosi{" "}
                {this.props.temp}
            </p>
        );
    }
}

export default Weather;
