import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        data: null,
    }
    key = '23bf1c19a598445d9996d96b1f1b41c3';
    render() {
        if(this.state.data){
        const {position} = this.state.data;

        const {lat , lang} = this.props;
        return <p>Informacje o pogodzie {lat} {lang} => {position.temp}</p>
        }
        return null ;
    }

    componentDidMount () {
        const {lat, lang} = this.props;

        fetch(`https://api.weatherbit.io/v2.0/current?key={this.key}&lat={lat}&lon={lang}`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                }
                return Promise.reject('Błąd' + resp.status);
            })
            .then(info => {
                this.setState({
                    data: info.data,
                })
            });
    }
}



ReactDOM.render(
    <Weather lat={52.2322222} lang={21.008333}/>,
    document.querySelector('#root')
);