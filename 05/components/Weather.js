import React from 'react';

const apiKey = 'b4bfc6a4ff014356840f447bc5275087'
const apiUrl = 'https://api.weatherbit.io/v2.0/current'
const lang = 'pl'
const unt = 'M'

class Weather extends React.Component {
    state = {
        data: null,
        error: null,
    }

    getWeatherData() {
        const { lat, lon } = this.props
        const apiUrlTemplate = `${apiUrl}?lat=${lat}&lon=${lon}&key=${apiKey}&lang=${lang}&units=${unt}`

        fetch(apiUrlTemplate)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Błąd: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                this.setState({ 
                    data: data.data[0], 
                })
            })
            .catch(error => {
                this.setState({
                    error: 'Wystąpił błąd podczas pobierania danych pogodowych',
                })
            })
    }

    componentDidMount() {
        this.getWeatherData()
    }

    render() {
        const { data, error } = this.state

        if (!data) {
            return null
        }
        if (error) {
            return <div>{ error }</div>
        }

        return (
        <div>
            <h1>Prognoza pogody</h1>
                <div>
                    <h2>Miasto: {data.city_name}</h2>
                    <h3>Opis: {data.weather.description}</h3>
                    <h3>Temperatura: {data.temp}°C</h3>
                    <h3>Wiatr: {data.wind_spd}m/s</h3>
                    <h3>Kierunek wiatru: {data.wind_cdir_full}</h3>
                    <h3>Cisnienie: {data.pres}hPa</h3>
                    <h3>Wschód słońca: {data.sunrise}</h3>
                    <h3>Zachód słońca: {data.sunset}</h3>
            </div>
        </div>
        )
    }
}

export default Weather;