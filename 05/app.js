import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {

    state = {
        data: ''
    }

    componentDidMount(){
        const {lat, lng} = this.props;
        const key = '690bbcc3c15447a296838d332feafa45';
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl`);

        promise
            .then((resp) => {
                if (resp.ok){
                    return resp.json();
                }
                if (resp.status === 400){
                    return Promise.reject('Bad query to API')
                }
                return Promise.reject(resp);
            })

            .then((weather) => {
                console.log(weather.data);
                const weatherData = weather.data[0];
                this.setState({data: weatherData});
            })

            .catch(err => console.error(err))
            .finally(() => console.log('Zaknczono odpytywanie do API'));

    }

    render(){
        
        const {data} = this.state;

        if(data) {
            // renderuj dopiero jak pobierzesz dane z API
            return (
                <>
                    <h1>informacje o pogodzie w {data.city_name}</h1>
                    <ul>
                        <li>{data.weather.description}</li>
                        <li>{data.temp} C</li>
                    </ul>
                </>
            
            )
        }

        // nic nie renderuj
        return null;
    
    }
}

root.render(<Weather lat={50.061389} lng={19.938333}/>);
