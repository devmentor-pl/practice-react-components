import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        data: null
    }

    constructor(props){
        super(props);
    }


    getDataWeather() {
        // const {city, description, temp} = this.state.data;
        console.log(this.state.data.city);
        
    }    

   render(){
        const {data} = this.state;
        if(data) {
            return (
                <>
                <p>{`Wheather today in ${data.city} is ${data.description} and temperature showing: ${data.temp}C`}{'\u00b0'}</p>
                </>
            )
        }

        return null;
   }

   async componentDidMount() {
    const {lat, lng} = this.props;
    const key = '39de9602544d45c5a6f1e1071bfdc7da';
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}`;
    const respons = await fetch(apiUrl);

    if(!respons.ok) {
        throw new Error('Network response was not ok');
    }
    
    const data = await respons.json();
    const {
        city_name: city,
        weather: {
            description
        },
        temp
    } = data.data[0];

    const apiData = {
        city,
        description,
        temp
    }

    this.setState({
        data: apiData
    })
}
}


ReactDOM.render(
    <>
        <Weather lat={52.232222} lng={21.008333} />
        <Weather lat={50.061389} lng={19.938333} />
        <Weather lat={51.11} lng={17.022222} />
    </>,
    document.querySelector('#root')
);