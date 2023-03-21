import React from "react";
import { apiService, apiStub } from "../API";

const { API_URL, API_KEY, API_ENABLED } = apiService;


class Weather extends React.Component {
    state = {
        data: null,
    }

    render() {
        const { data } = this.state;

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

        return null;
    }

    componentDidMount() {

        this._fetchWeatherData()
            .then(
                resp => this.setState({
                    data: resp,
                })
            )
            .catch(error => console.error('Something went wrong...', error))

    }

    _fetchWeatherData() {
        const { lat, lng } = this.props;
        const url = `${API_URL}?key=${API_KEY}&lat=${lat}&lon=${lng}&lang=pl`;

        if (this._isApiEnabled()) {
            return fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }

                    return Promise.reject(response);
                })
                .then(response => {
                    const [weatherData] = response.data;
                    console.log(weatherData);
                    return weatherData;
                })
        }
        else {
            return new Promise((resolve, reject) => {
                resolve(apiStub.data);
            });
        }
    }

    _isApiEnabled() {
        return API_ENABLED ? true : false;
    }
}

export default Weather;