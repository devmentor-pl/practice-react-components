import React from 'react';
import ReactDOM from 'react-dom';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.apiKey = '7ad5d6df79834fbfa6cdfa28bf8c7483';
        this.lang = 'en';
        this.units = 'I';
        this.state = {
            weatherInfo: null,
        };
    };

    render() {
        const { weatherInfo } = this.state;
        if (weatherInfo) {
            const { lat, lng } = this.props;
            const { description, temp } = weatherInfo;
            return (
                <>
                    <h1>Weather info</h1>
                    <ul>
                        <li>Location:
                            <ul>
                                <li>latitude: {lat}</li>
                                <li>longitude: {lng}</li>
                            </ul>
                        </li>
                        <li>Description:
                            <ul>
                                <li>summary: {description}</li>
                                <li>temperature: {temp} &#8457;</li>
                            </ul>
                        </li>
                    </ul>
                </>
            );
        }
        return null;
    }

    componentDidMount() {
        const promise = fetch(this.setApiPath());
        promise
            .then(resp => {
                if (resp.ok) { return resp.json() };
                if (resp.status === 400) { return Promise.reject('Enter correct geo coordinates!') };
                return Promise.reject(resp);
            })
            .then(weatherInfo => this.setWeatherInfoData(weatherInfo.data[0]))
            .catch(err => alert(err))
    }

    setApiPath() {
        const { lat, lng } = this.props;
        return `https://api.weatherbit.io/v2.0/current?key=${this.apiKey}&lat=${lat}&lon=${lng}&lang=${this.lang}&units=${this.units}`;
    };

    setWeatherInfoData({ weather: { description }, temp }) {
        this.setState({
            weatherInfo: {
                description,
                temp
            },
        });
    };
}

ReactDOM.render(<WeatherApp lat={52.232222} lng={21.008333} />, document.querySelector('#root'));