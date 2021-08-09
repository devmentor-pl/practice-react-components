import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        data: null
    }

    render(){
        const {data} = this.state;
        if(data) {
            return (
                <>
                <p>{`Miasto: ${data.city}. Pogoda: ${data.description}. Temperatura: ${data.temp}C`}{'\u00b0'}</p>
                </>
            )
        }

        return null;
   }

   async componentDidMount() {

        const {lat, lng} = this.props;
        const lang = 'pl';
        const key = '6f40ff7ea90948c6a21b58f028a0d134';
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=${lang}`;
        const respons = await fetch(apiUrl);

    if(!respons.ok) {
        throw new Error('Resp is not ok!');
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
