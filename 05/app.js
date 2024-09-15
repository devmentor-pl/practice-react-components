import React from 'react';
import { getData } from './API';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class WeatherApp extends React.Component {
    state = {
        data: null
    }

    render() {
        const { data } = this.state;
        if (data) {
            return (
                <div style={divStyle}>
                    <h2>Weather Data:</h2>
                    <p>City: {data.city_name}</p>
                    <p>Temperature: {data.temp} °C</p>
                    <p>Pressure: {data.pres} mb</p>
                    <p>Wind speed: {data.wind_spd} m/s</p>
                    <p>Sunrise: {data.sunrise} m/s</p>
                    <p>Sunset: {data.sunset} m/s</p>
                </div>
            )
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {lat, lng} = this.props;
        getData(lat, lng)
            .then(data => this.setState({data: data.data[0]})
        )
            .catch(err => console.log(err));
    }
}

const divStyle = {
    backgroundColor: '#85e2e4',
    width: '80%',
}

root.render(
    <>
        <WeatherApp lat ={50.049683} lng = {19.944544}/>,
        <WeatherApp lat ={52.2322222} lng = {21.008333}/>,
    </>,
)