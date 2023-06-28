import React from "react";
import {createRoot} from "react-dom/client";

const root = createRoot(document.querySelector('#root'))

class Weather extends React.Component {
    state = {
        data: null,
        key: '3be1579ab3be42d78e26bfae3f3b9db8',
    }

    render() {
        const {data} =  this.state;
        if (data) {
            return (
                <section>
                    <h2>{data.city_name}</h2>
                    <h2>{data.temp} C</h2>
                    <h2>{data.weather.description}</h2>
                </section>
            )
        }
        return null;
    }

    componentDidMount() {
        this.getWeatherData();
    }

    async getWeatherData () {
        const {lat, lng} = this.props;
        const resp =  await fetch(`https://api.weatherbit.io/v2.0/current?key=${this.state.key}&lat=${lat}&lon=${lng}&lang=pl&units=M`);
        const weatherData = await resp.json();
        this.setState({
            data: weatherData.data[0],
        })
    }
}

root.render(
    <Weather
        lat={52.232222} 
        lng={21.008333}
    />)