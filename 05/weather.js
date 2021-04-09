import React from 'react';
// https://api.weatherbit.io/v2.0/current?lang=pl&key=4903c309127f4896b6aadb0549216809&lat=52.232222&lon=21.008333

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        const { lat, lng } = this.props;
        fetch(`https://api.weatherbit.io/v2.0/current?lang=pl&key=4903c309127f4896b6aadb0549216809&lat=${lat}&lon=${lng}`)
  .then(response => response.json())
  .then(data => console.log(data.data[0]));
    }

    render() {
        const { data } = this.state;
       
        if(data) {
    
            return<>
            <h1>informacje o pogodzie...</h1>
            <p>Pogoda</p>
            </>

        }
        return null;
     }

}
export default Weather;