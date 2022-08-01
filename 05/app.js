import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        data : null
    }

    constructor (props) {
        super(props);
        this.baseUrl = 'https://api.weatherbit.io/v2.0/current'
        this.key = '730d1b62752a45d69ba4fa85b948cfd8';
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
        const url = this.getUrl();                                    

        this.loadData(url)
            .then(resp => this.displayWeather(resp.data[0]))
            .catch(err => console.log(err))
            .finally(() => console.log('Zakończono odczytywanie API'));                
    }
        
    getUrl() {
        const {lat, lon, lang='eng'} = this.props;
        return `${this.baseUrl}?key=${this.key}&lat=${lat}&lon=${lon}&lang=${lang}`;
    }

    loadData(apiUrl) {    
        return fetch(apiUrl)
            .then(resp => {
                if (resp.ok) { return resp.json();}
                if(resp.status === 429) {
                    return Promise.reject('LIMIT EXCEEDED');
                }            
                return Promise.reject(`Kod błędu: ${resp.status}`);
            })        
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