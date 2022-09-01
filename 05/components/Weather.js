import React from 'react';

class Weather extends React.Component {
    state = {data:[]};

    componentDidMount() {
        const { lat, lng } = this.props;
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=0d259a14aa1b4757919be84cda4d3ae2&lang=pl&lat=${lat}&lon=${lng}`);
        promise.then(res => {
            if (!res.ok) {
                throw new Error('Can not get data!')
            } else {
                return res.json();
            };
        }).then(data => {
            return this.getWeatherInfo(data);
        }).catch(alert);
    };

    getWeatherInfo = (data) => {
        const { data: [{ city_name,temp, weather:{description} }] } = data;
        this.setState({ data:[city_name, temp, description]});
    };

    render() {
        const { data } = this.state;
        if (data) {
            return (
                <>
                <h1>Weather information:</h1>
                    {data.map(el => <li>{el}</li>)}
                </>
            );
        }
        return null;
    };
};

export default Weather;