import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class WeatherApp extends React.Component {
    state = {
        weatherData: null,
    }

    render() {
       
        const { weatherData } = this.state;
        if (weatherData) {
            // renderuj dopiero jak pobierzesz dane z API

            return <div><h1>Weather in {weatherData[0].city_name}</h1>
                <li>Sunset time: {weatherData[0].sunset}</li>
                <li>Sunrise time: {weatherData[0].sunrise}</li>
                <li>Temperature: {weatherData[0].temp}</li>
                <li>Datetime: {weatherData[0].datetime}</li>
            </div>
        }

        // nic nie renderuj
        return null;
    }


    componentDidMount() {
        const { longitude, latitude } = this.props
        
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=8c0f3e2bfce546e48c806c2eaf77af17&lat=${latitude}&lon=${longitude}`)
        promise.then((resp) => {


            return resp.json();
        })
            .then((data) => {

                console.log(data)
                this.setState({

                    weatherData: data.data
                })

            });

    }

}

const App = () => <WeatherApp latitude={52.232222} longitude={21.008333} />
root.render(<App />);
