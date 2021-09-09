import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
        this.link = 'https://api.weatherbit.io/v2.0/current?key=14aab904234e414784a109152262897c&lang=pl';
    }

    render () {
        const { data } = this.state;
        if(data) {
            const { cityName, wind, weather, temp } = data;

            return (
                <>
                <h1>Miasto: { cityName }</h1>
                <p>Aktualne warunki: {weather}, <span>wiatr: { wind }</span>, <span>temperatura: { temp }</span></p>
                </>
            )
        };
        return null;
    }

    componentDidMount () {
        const link = this.link;
        const { latitude, longitude } = this.props;
        return this.renderData(link, latitude, longitude);
    }

    renderData = async (link, lat, lon) => {

        try {
            const request = await fetch(`${link}&lat=${lat}&lon=${lon}`);

            if ( request.ok ) {
            const data = await request.json();
            const [ cityData ] = data.data;
            console.log(cityData);
            const { city_name: cityName, wind_cdir_full: wind, weather: { description: weather }, temp } = cityData;

            return this.setState({data: { cityName, wind, weather, temp }});
            } 

            return Promise.reject('Wrong address!');

        } catch (err) {
            throw new Error('Unidenfined problem', err)
        }
    }
}

ReactDOM.render(
    <>
    <Weather latitude={52.232222} longitude={21.008333}/>
    <Weather latitude={50.061389} longitude={19.938333}/>
    <Weather latitude={51.11} longitude={17.022222}/>
    </>,
    document.querySelector('#root')
)