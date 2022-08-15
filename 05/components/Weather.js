import React from 'react'
import styles from './styles/styles'

class Weather extends React.Component {
    state = {
        data: null
    }  
    
    componentDidMount() {
        const {lat, lng} = this.props
        const key = '7950d7e4e3c64903a92dfc9c3069c67c'

        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl`)

        promise
            .then(resp => {
                if(resp.ok) { return resp.json() }
            })
            .then(data => {
                console.log(data)
                this.setState({data: data.data})
            })
            .catch(err => console.error(err))
    }

    render() {  
        const {data} = this.state  
        console.log(data)         
        if(data) {
            return (
                <div style={styles.weather}>
                    <header style={styles.header}>
                        <p>Obecna pogoda:</p>
                        <h1 style={styles.city}>{this.state.data[0].city_name}, {this.state.data[0].country_code}</h1>
                    </header>
                    <ul>   
                        <li>Temperatura: <b>{this.state.data[0].temp}°C</b></li>
                        <li>Temperatura odczuwalna: <b>{this.state.data[0].app_temp}°C</b></li>
                        <li><b>{this.state.data[0].weather.description}</b></li>
                        <li>Wilgotność: {this.state.data[0].rh}%</li>
                        <li>Zachmurzenie: {this.state.data[0].clouds}%</li>
                    </ul>                
                </div>
            )
        }

        return null
    }
}

export default Weather