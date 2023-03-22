import React from "react";
import WeatherProvider from "../WeatherProvider";

class Weather extends React.Component {
    state = {
        data: null,
        errorMessage: '',
    }

    render() {
        const { data, errorMessage } = this.state;

        if (data) {
            const { city_name, temp, rh: humidity, clouds, wind_spd: windSpeed, wind_cdir: windDirection, weather: { description } } = data;

            return (
                <section>
                    <h2>Current weather in {city_name}</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1em', listStyle: 'none' }}>
                        <li>Temperature: {temp}°C</li>
                        <li>Relative humidity: {humidity}%</li>
                        <li>Cloud coverage: {clouds}%</li>
                        <li>Wind speed: {windSpeed} m/s</li>
                        <li>Wind direction: {windDirection}</li>
                        <li>Description: {description}</li>
                    </ul>
                </section>
            );
        }

        return (
            <section>
                <h2>{errorMessage}</h2>
            </section>
        );
    }

    componentDidMount() {
        const { lat, lng } = this.props;
        const locationData = { lat, lng };
        const weatherData = new WeatherProvider(locationData);

        weatherData.loadData()
            .then(
                response => this.setState({
                    data: response,
                    errorMessage: '',
                })
            )
            .catch(error =>
                this.setState({
                    errorMessage: `Something went wrong. Error message: ${error.statusText}`,
                })
            );
    }

}

export default Weather;