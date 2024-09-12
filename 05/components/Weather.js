import React from "react";
import WeatherApi from "./WeatherApi";

class Weather extends React.Component {
    state = {
        data: null
    }

    render() {
        const { lat, lng } = this.props
        const { data } = this.state

        if (data) {
            const [details] = data
            const temp = details.temp
            const info = details.weather.description
            return (
                <section>
                    <p>Pogodę w obecnej chwili w miejscu o szerokości geograficznej: <strong >{lat}</strong> i długości geograficznej: <strong >{lng}</strong> można określić jako: <strong >{info}</strong>, gdzie temperatura wynosi: <strong>{temp}</strong>&#8451;</p>
                </section >
            )
        } else {
            return null
        }
    }

    componentDidMount() {
        const api = new WeatherApi(this.props)

        api.getData().then(({ data }) => this.setState({ data }))
    }
}

export default Weather