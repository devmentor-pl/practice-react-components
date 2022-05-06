import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state= {
        key: '4fd9bc97df8e4a06b44faf1c0bc1495f',
        latitude: this.props.lat,
        longitude: this.props.lng,
        weather: null,
    }    
    
    render() {
        if(this.state.weather) {
            const {city_name, temp, clouds} = this.state.weather;
            
            return (
                <section>
                    <div>{city_name}</div>
                    <div>temp: {temp}</div>
                    <div>clouds: {clouds}%</div> 
                </section>
            )
        }

        return null;
    }

    componentDidMount() {
        const { key, latitude, longitude } = this.state;
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}`);
        promise.then(resp => resp.json())
                .then(resp => this.setState({weather: resp.data[0]}));
    }
}

ReactDOM.render(<Weather lat={'52.232222'} lng={'21.008333'}/>, document.querySelector('#root'))

