import React from 'react';

class Weather extends React.Component {
    state = {
        data: ''
    }

    render(){
        const {data} = this.state
        if(data){
            console.log(data)
            const {ob_time,city_name,temp,weather,clouds,pres,wind_spd} = data
            return (
                <section>
                <h1>{`Prognoza pogody na stan: ${ob_time} , w mieście ${city_name}`}</h1>
                <h3>{`Temperatura: ${temp}℃`}</h3>
                <h3>{`Opis pogody: ${weather.description}`}</h3>
                <p>{`Zachmuerzenie: ${clouds}%`}</p>
                <p>{`Ciśnienie: ${pres} hPa`}</p>
                <p>{`Prędkość wiatru ${wind_spd} Km/h`}</p>
                </section>
            )
        }
        return null
    }

    componentDidMount(){
        const {lat,lng, key='e3907d2933ba4e9bb7403f6f61e8f651', lang='pl'} = this.props
        const API_URL = `https://api.weatherbit.io/v2.0/current?&key=${key}&lang=${lang}&lat=${lat}&lon=${lng}`
        const weatherData = this._fetch(API_URL)

        weatherData.then(data => this.setState({data: data.data[0]}))
    }

    _fetch(URL) {
        return fetch(URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Error')
            })
    }
}

export default Weather