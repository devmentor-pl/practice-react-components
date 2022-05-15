import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        cityName: null,
        weatherDescription: null,
        weatherTemp: null,
    }
    
    render() {
        const {cityName, weatherDescription, weatherTemp} = this.state;
        if(cityName && weatherDescription && weatherTemp) {
            return <h1>{cityName}: {weatherTemp}&#x2103;, {weatherDescription}</h1>
        }
        return null;
    }

    async componentDidMount() {
        const {lat, lng} = this.props;
        const weather = await this._fetch(lat, lng);
        const data = weather.data[0];
        this.setState({
            cityName: data.city_name,
            weatherDescription: data.weather.description,
            weatherTemp: data.temp,
        })
    }

    _fetch(latitude, longitude) {
        return fetch(`https://api.weatherbit.io/v2.0/current?key=72418f901baa4d5e9d0af04ff3799a08&lang=pl&lat=${latitude}&lon=${longitude}`)
            .then(resp => {
                if(resp.ok) return resp.json();
                return Promise.reject(resp);
            })
            .then(data => {
                return data;
            })
            .catch(err => console.log(err))
    }
}

ReactDOM.render(
    <Weather lat={52.232222} lng={21.008333}/>,
    document.querySelector('#root')
)