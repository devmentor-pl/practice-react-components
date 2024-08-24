import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'));
const apiKey = 'my api key'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            error: null,
        }
    }   

    componentDidMount() {
        const {lat, lon, apiKey} = this.props

        fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lon}&lang=pl`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.data[0],
                loading: false,
            })
        })
        .catch(error => {
            this.setState({
                error,
                loading: false,
            })
        })
    }

    render() {
        const {data, loading, error } = this.state

        if (loading) {
            return <h2>Loading ....</h2>
        }

        if (error) {
            return <h2>Error: {error.message}</h2>
        }

        return (
            <div>
                <h1>Informacje pogodowe</h1>
                <p>Temperatura: {data.temp}°C</p>
                <p>Temperatura odczuwalna: {data.app_temp}°C</p>                
                <p>Miasto: {data.city_name}</p>
                <p>Pogoda: {data.weather.description}</p>
            </div>
        )
    }
}

class App extends React.Component {
    render () {


        return (
            <div>
                <Weather lat={52.232222} lon={21.008333} apiKey={apiKey} />
            </div>
        )
    }
}

root.render(<App />)