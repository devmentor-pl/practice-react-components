import React from 'react';
import ReactDOM from 'react-dom';

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
        const {lat, lng} = this.props;
        fetch(`https://api.weatherbit.io/v2.0/current?key=170c52d8560548199f6c1e5817901f2f&lat=${lat}&lon=${lng}&lang=pl&units=I&include=minutely`)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }
}

ReactDOM.render(<Weather lat={51.11} lng={17.02}/>, document.querySelector('#root'));