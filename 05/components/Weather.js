import React from 'react';


class Weather extends React.Component { 
    state = {
        data: null,
    }

    render(){
        const {data} = this.state;
        if(data){
            return(
                <div>
                    <h1>
                        Informacje o pogodzie dla {data.latitude},{data.longitude} : 

                    </h1>
                    <ul>
                        <li>Temperatura: {data.currently.temperature} </li>
                        <li>{data.currently.summary}</li>
                        <li>{data.daily.summary}</li>
                    </ul>
                </div>
            )
        }

        return null;
    }    

    componentDidMount(){
    const {latitude,longitude} = this.props;

    const proxy = 'https://cors-anywhere.herokuapp.com/'; 
    const api = `${proxy}https://api.darksky.net/forecast/3be817ce9069d357625054007ae7d7dd/${latitude},${longitude}?lang=pl`;
        fetch(api)
            .then(resp =>{
                if(resp.ok){
                    return resp.json();
                }

                return Promise.reject(resp);
            })
            .then(weatherData => {
                this.setState({
                    data: weatherData,
                });
            })
            .catch(err => console.error(err));
    }

}

export default Weather;