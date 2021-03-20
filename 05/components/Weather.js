import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {
    render() {
        const { lat, lng } = this.props;
        return <span>Szerokość geograficzna: {lat}, długość geograficzna: {lng}</span>
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