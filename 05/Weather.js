import React, { Component } from "react";

class Weather extends Component {
    state = {
        data:null
    }

    render() {
        if (this.state.data === null) {
            return null
        }
        const { lat, lng } = this.props;
        return(
            <div>

                <h1>pogoda {lat} {lng}</h1>
                <p>Aktualne warunki: {this.state.temp}</p>
            </div>
        )


}

    componentDidMount() {
        const { lat, lng } = this.props;
        const key = 'f8b504845f0346fc845bbe08adfc8ac4';

            //https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
        fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                data:res.data[0]
            })
        })

    }

}

export default Weather;