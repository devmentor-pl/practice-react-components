import React from 'react';
import ReactDOM from 'react-dom';

class Wheather extends React.Component {
    state = {
        data: null,
    }

    render() {
        const { data } = this.state;
        const {lat, lng} = this.props;
        if(data) {
        // renderuj dopiero jak pobierzesz dane z A
            return <section>
                        <h1>Informacje o pogodzie dla szerokosci geogr.<strong>{lat}</strong> i dlugosci geogr.{lng}</h1>
                        <p>Miasto: {data.city_name} </p>
                        <p>Temperatura: {data.temp}</p>
                </section>
        
        } else {
            return null;
          }
    }

    componentDidMount() {
        const {lat, lng} = this.props;
        const key = 'ec377865373f4f07b0532c27f47a808d';
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}`);
        promise
            .then(resp =>{
                if(resp.ok){
                    return resp.json()}
                    return Promise.reject(resp);
            })
            .then(data => this.setState({ data: data.data[0] }))
            .catch(err => console.log(err))
    }
}

ReactDOM.render(
    <Wheather
        lng="21.008333"
        lat="52.232222"
    />, 
    document.querySelector('#root')
);
