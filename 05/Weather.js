import React from "react";
import {get} from './WeatherProvider'

class Weather extends React.Component{
    state = {
        data: null
    }
    constructor(props){
        super(props);
        this.abortController = new AbortController();
    }
    componentDidMount(){
        const {signal} = this.abortController;
        const url = `https://api.weatherbit.io/v2.0/current?key=93558fd78ea34b9182d933c681a32e9b&lat=${this.props.lat}&lon=${this.props.lon}&lang=pl`
        get(url, signal)
            .then((data) => {
                this.setState({data: data});
            })
    }
    componentWillUnmount(){
        this.abortController.abort();
    }
    render(){
        const {data} = this.state;
        if(data){
            const {city_name, weather, sunrise, sunset, temp} = data.data[0]; 
            return (
                <>
                    <h1>Prognoza pogody dla miasta: {city_name}</h1>
                    <p>Warunki w ciągu dnia: {weather.description}</p>
                    <p>Słońce wzejdzie o godzinie: {sunrise} i zajdzie o godzinie: {sunset}</p>
                    <p>Maksymalna temperatura w ciągu dnia wyniesie: {temp}</p>
                </>
            )}
        return null
    }
}

export default Weather