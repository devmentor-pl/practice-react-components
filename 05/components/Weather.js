import React from 'react'
import styles from './styles/styles'
import {load} from './provider'

class Weather extends React.Component {
    state = {
        data: null
    }  
    
    componentDidMount() {
        const {lat, lng} = this.props
        
        load(lat, lng)
            .then(object => {
                console.log(object)
                this.setState({data: object.data})
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