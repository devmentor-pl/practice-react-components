import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {
    state = {
        lat: '',
        lon: '',
        app_temp: '',
        description: '',
    }

    render() {
        const { lat, lon, app_temp, description } = this.state;

        if (lat && lon && app_temp && description) {
            return <h1>Szerokość geograficzna: {lat}, długość geograficzna: {lon}, temperatura wynosi: {app_temp}, opis pogody: {description}</h1>
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');

        const { lat, lng } = this.props;

        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=ebb2bedeb39a4cffa34dc9ea4c929795&lat=${lat}&lon=${lng}`);

        promise
            .then(resp => {
                if (resp.ok) { return resp.json(); }
                return Promise.reject(resp);
            })
            .then(ip => {
                ip.data.forEach(element => {
                    const { lat, lon, app_temp, weather: { description } } = element;
                    this.setState({
                        lat: lat,
                        lon: lon,
                        app_temp: app_temp,
                        description: description,
                    });
                });
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone!')
            });
    }
}

Weather.defaultProps = {
    lat: 52.232222,
    lng: 21.008333,
}

Weather.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
}

export default Weather;