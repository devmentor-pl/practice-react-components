import React from 'react';

class Weather extends React.Component{
    state = {
        data: [null]
    }

    async componentDidMount(){
        const {lat,lng} = this.props;
        const url = 'https://api.weatherbit.io/v2.0/current?key=631d0df33516474ab711b08ff98f843e&lang=pl';
        const response = await fetch(`${url}&lat=${lat}&lon=${lng}`);
        const weatherData = await response.json();
        this.setState({data:weatherData.data[0]})
    }

    render(){
        const {data} = this.state;
        if(data){
            console.log(data);
            const {city_name,temp,pres} = data;
            return (
                <section>
                    <h1>Informacje o pogodzie w: {city_name}</h1>
                        <p>Temperatura:{temp}</p>
                        <p>Ciśnienie: {pres}</p>
                        {/* <p>Opis pogody: {data.weather.description}</p>  - NIE DZIAŁA ale nie wiem dlaczego */}
                </section>
            )
        }
        
    }
}

export default Weather;