import React from 'react';
import { createRoot } from 'react-dom/client';
import fakeWeatherData from './fakeWeatherData';

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
        const { lat, lng } = this.props;

        fakeWeatherData(lat, lng).then((fakeData) => {
            this.setState({
                data: fakeData,
            });
        });
    }

    render() {
        const { data } = this.state;

        if (data) {
            return (
                <section>
                    <h1>Weather in {data.city_name}:</h1>
                    <p>Description: {data.weather.description}</p>
                    <p>Temperature: {data.temp}°C</p>
                </section>
            );
        }

        return <p>Loading...</p>;
    }
}
root.render(<Weather lat={52.232222} lng={21.008333} />);