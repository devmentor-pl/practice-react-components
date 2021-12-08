import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = { 
        data: null,
    }

    render() {
        const {data} = this.state;
        if(data) {
            const {city, temperature, pressure} = data;
            const {lat, lng} = this.props;
            return (
                <div>
                    <ul>
                        <h2>Description:</h2>
                        <li>Latitude: {lat}</li>
                        <li>Longtitude: {lng}</li>
                    </ul>
                    <h1>Weather in {city} is:</h1>
                    <h4>{temperature} &#8451; and there's {pressure} &#13169;</h4>
                </div>
            )
        }
        return null;
    }

    componentDidMount() {
        const url = this.apiUrl();
        // console.log(url);

        return fetch(url)
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .then(data => {
                this.setWeatherData(data);
            })
            .catch(error => console.log(error.message))
    }

    apiUrl() {
        const corePart = 'https://api.weatherbit.io/v2.0/current?';
        const {lat, lng, apiKey} = this.props;
        const lang = '[pl]';
        const url = `${corePart}lat=${lat}&lon=${lng}&key=${apiKey}&lang=${lang}`
        return url;
    }

    setWeatherData(weahter) {
        const city = weahter.data[0].city_name;
        const temperature = weahter.data[0].temp;
        const pressure = weahter.data[0].pres
        
        this.setState({
            data: {
                city: city,
                temperature: temperature,
                pressure: pressure,
            }
        })
    }
}

ReactDOM.render(<Weather lat='52.232222' lng='21.008333' apiKey='36adccf278294c54b304a857f8dacb85'/>, document.querySelector('#root'));