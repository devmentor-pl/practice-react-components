import React from 'react';
import { createRoot } from 'react-dom/client';
import fakeWeatherData from './fakeWeatherData';
import { getWeatherData } from './getWeatherData';

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {
    state = {
        data: null,
        useFakeData: false,
    };

    componentDidMount() {
        const { lat, lng } = this.props;
        const { useFakeData } = this.state;

        if(useFakeData) {
            fakeWeatherData(lat, lng).then(data => {
                this.setState({ data });
            });
        } else {
            getWeatherData(lat, lng).then(data => {
                console.log("Real data:", data);
                this.setState({ data });
            })
            .catch(error => console.error("Error fetching weather data:", error));
        }
    }

    render() {
        const { data } = this.state;

        if (!data || !data.data || data.data.length === 0) {
            return <div>Loading...</div>;
        }

        const weatherInfo = data.data[0];
        const weatherDescription = weatherInfo.weather ? weatherInfo.weather.description : 'No description available';

        return (
            <section>
                <h1>Weather in {weatherInfo.city_name}</h1>
                <p>Temperature: {weatherInfo.temp}</p>
                <p>Weather: {weatherDescription}</p>
            </section>
        );
    }
}
root.render(<Weather lat={52.232222} lng={21.008333} />);