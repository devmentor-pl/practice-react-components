import React from 'react';
import ReactDOM from 'react-dom';

import paragraph from './components/styles/paragraph';

class Weather extends React.Component {
    state = {
        data: null
    }

    render() {
        const {data} = this.state;
        // renderuj dopiero jak pobierzesz dane z API
        if (data) {
            return (
                <>
                    <h1 style={paragraph}>{`${data.city}, szer.: ${this.props.lat}, dł.: ${this.props.lng}, pogoda: ${data.description}, temperatura: ${data.temp} C`}</h1>
                </>
            )
        }
        // nic nie renderuj
        return null;
    }
   
    async componentDidMount() {        

        const {lat, lng} = this.props;
        const key = '920997b796fb4550a7f0e6b7ab1c5130';
        const lang = 'pl';
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=${lang}`;

        const respons = await fetch(apiUrl);
        const data = await respons.json();
        console.log(respons);

        const {
            city_name: city,
            weather: {description},
            temp
        } = data.data[0];

        const apiData = {
            city,
            description,
            temp
        };

        this.setState({
            data: apiData
        });
    }
}

ReactDOM.render(
    <>
        <Weather lat={52.48} lng={17.26}/> {/* Pobiedziska */}
        <Weather lat={52.58} lng={17.26}/> {/* Kiszkowo */}
        <Weather lat={52.39} lng={17.22}/> {/* Kostrzyn */}
        <Weather lat={52.41} lng={17.07}/> {/* Swarzędz */}
        <Weather lat={52.41} lng={16.92}/> {/* Poznań */}
        <Weather lat={52.53} lng={17.60}/> {/* Gniezno */}
    </>,
    document.querySelector('#root')
); 