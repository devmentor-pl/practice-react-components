import React from 'react';
import ReactDOM from 'react-dom';
import weatherInfoProvider from './weatherInfoProvider';

class Weather extends React.Component {
    state = {
        data: null,
    }

    render() {
        const {data} = this.state;
        if(data) {
            return<h1>{this.state.data.data[0].app_temp}</h1>
        }
        return null;
    }

    componentDidMount() {
        const api = new weatherInfoProvider;
        const {lat, lng} = this.props;
        //poniżej wersja z API w tym samym pliku:
        /*fetch(`https://api.weatherbit.io/v2.0/current?key=170c52d8560548199f6c1e5817901f2f&lat=${lat}&lon=${lng}&lang=pl&units=I&include=minutely`)
            .then(response => response.json())
            .then(data => this.setState({data}))*/
            
        //tutaj werjsa z CRUD w osobnym pliku:
        api.get(`key=4b9549254d7046a3953d2d9a837ed065&lat=${lat}&lon=${lng}&lang=pl&units=I&include=minutely`)
            .then(data => this.setState({data}))
    }
}

ReactDOM.render(<Weather lat={51.11} lng={17.02}/>, document.querySelector('#root'));