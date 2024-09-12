import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // long: '52.232222',
            // lat: '21.008333',
            key: 'cf682412960844e7b87398e3c7d39536',
            weatherData: [],
        };
    }


    render() {
        const { weatherData } = this.state;
        if (weatherData && weatherData.weather) {
            // renderuj dopiero jak pobierzesz dane z API

            return (
                <section>
                    <h1>{weatherData.city_name}</h1>
                    <p>Temperatura: {weatherData.temp}°C</p>
                    <p>Ciśnienie: {weatherData.pres} hPa</p>
                    <p>Wilgotność: {weatherData.rh}%</p>
                    <p>Opis: {weatherData.weather.description}</p>
                </section>
            )
        }

        // nic nie renderuj
        return null;
    }

    componentDidMount() {
        const { lat, lng } = this.props;
        fetch(`https://api.weatherbit.io/v2.0/current?key=${this.state.key}&lang=pl&lat=${lat}&lon=${lng}`)
            .then((res) => res.json())
            .then((json) => this.setState({ weatherData: json.data[0] }));
    }
}


root.render(<Weather lat={52.232222} lng={21.008333} />)