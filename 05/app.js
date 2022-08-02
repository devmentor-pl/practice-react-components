import React from 'react';
import ReactDOM from 'react-dom';
import WeatherProvider from './WeatherProvider';

class Weather extends React.Component {
    state = {
        data : null
    }

    constructor (props) {
        super(props);      
        this.weatherAPI = new WeatherProvider();
    }

    render() {         
        const {data} = this.state;

        if (data) {
            const {lat, lon, temp, description, city_name} = data;
            return (
                <>
                    <h2>Informacje o pogodzie dla {city_name} (współrzędne: {lat} {lon})</h2>
                    <ul>
                        <li>Temperatura : {temp}  </li>
                        <li>Opis:  {description} </li>
                    </ul>
                </>
            )
        }
            
        return null;
    }

    componentDidMount() {                                                  
        const {lat, lon, lang} = this.props;

        this.weatherAPI.getData(lat, lon, lang)        
            .then(resp => this.displayWeather(resp.data[0]))
            .catch(err => alert(err));
    }
        
    displayWeather(respData) {
        const {lat, lon, temp, city_name, weather : {description} } = respData; 

        this.setState({
            data : {
                lat,
                lon,
                temp,
                description,
                city_name
            }
        })
    } 
}

ReactDOM.render(<Weather lat={52.232222} lon={21.008333} lang = {'pl'} />, document.querySelector('#root'));