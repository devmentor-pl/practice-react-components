import React from "react";
import {getWeatherData} from "./API.js";


class Weather extends React.Component {
    state = {
        data: null,
        key: '3be1579ab3be42d78e26bfae3f3b9db8',
    }

    render() {
        const {data} =  this.state;
        if (data) {
            return (
                <>
                    <h2>{data.city_name}</h2>
                    <h2>{data.temp} C</h2>
                    <h2>{data.weather.description}</h2>
                </>
            )
        }
        return null;
    }

    componentDidMount() {
        this.displayWeatherData();
    }

    async displayWeatherData () {
        const {lat, lng} = this.props;
        const key = this.state.key;
        const weatherData = await getWeatherData(key,lat,lng)
        
        this.setState({
            data: weatherData.data[0],
        })
    }

}

export default Weather