import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/Weather';

class App extends React.Component {
    state = {
        data: null,
        dataLat: 52.232222,
        dataLng: 21.008333,
    }

    render() {
        const { data, dataLat, dataLng } = this.state;

        if (data) {
            return (
                <>
                    <Weather lat={dataLat} lng={dataLng} />
                    <h1>{data}</h1>
                </>
            )
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');

        const { dataLat, dataLng } = this.state;

        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=ebb2bedeb39a4cffa34dc9ea4c929795&lat=${dataLat}&lon=${dataLng}`);

        promise
            .then(resp => {
                if (resp.ok) { return resp.json(); }
                return Promise.reject(resp);
            })
            .then(ip => {
                ip.data.forEach(element => {
                    const { lat, lon, app_temp, weather: { description } } = element;
                    const dataWeather = `Szerokość geograficzna: ${lat}, długość geograficzna: ${lon}, temperatura wynosi: ${app_temp}, opis pogody: ${description}`;
                    this.setState({ data: dataWeather });
                });
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone!')
            });
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);