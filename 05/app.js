import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
    state = {
        weatherData: null
    }
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this._getWeather();
    }
    _getWeather() {
        const { lat, lon } = this.props;
        const apiKey = 'c12166f6b699496195f7b2ca51407ce4';
        const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lon}&lang=pl`

        const weather = fetch(url)
            .then(resp => (resp.ok) ? resp.json() : Promise.reject(resp))
            .then(resp => {
                this.setState({ weatherData: resp.data[0] })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { weatherData } = this.state;
        if (weatherData) {
            const { lat, lon, city_name, weather: { description }, temp } = weatherData;
            return (
                <div style={ weatherCardStyle }>
                    <h4>POGODA</h4>
                    <h1>Miasto: { city_name }</h1>
                    <ul>Współrzędne:
                        <li>Szerokość: { lat }</li>
                        <li>Długość: { lon }</li>
                    </ul>
                    <h4>Szczegółowe informacje:</h4>
                    <p> Opis: { description } </p>
                    <h3>Temperatura: { temp } ° C</h3>
                </div>
            )
        } else {
            return null
        }
        
    }
}

const weatherCardStyle = {
    height: 400,
    width: 300,
    borderRadius: 10,
    border: '1px solid #E74C3C',
    padding: 30
}

ReactDOM.render(<App/>, document.querySelector('#root'))