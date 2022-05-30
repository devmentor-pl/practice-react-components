import React from 'react';
import ReactDOM from 'react-dom';

const key = 'cf9b27003dcc40e995fe75e5f0156947'

const styles = {
    fontWeight: 'bold',
    color: 'blue'

}

class Weather extends React.Component {
    state = {
       data: null,
    }
 
    render() {
        const {data} = this.state
           if(data) {    
                const {lat, lng} = this.props
                const {city, uv, temp } = data
                return ( 
                    <section>
                            <h1>Informacje o pogodzie:</h1>
                                <p>Współrzędne: {lat}, {lng} </p>
                                <p>Temperatura w mieście <span style={styles}> {city}</span> wynosi {temp}, promieniowanie UV: {uv}</p>
                    </section>
                    )
                }
        return null;
    }

    componentDidMount() {
        const {lat, lng} = this.props
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl`)
        promise
        .then(resp => {
            if(resp.ok) { return resp.json()}
            return Promise.reject(resp)
        })
        .then(data => { this.getWeatherInfo(data) })
        .catch(err => console.error(err))
    }

    getWeatherInfo(weather) {
        const city = weather.data[0].city_name
        const uv = weather.data[0].uv
        const temp = weather.data[0].temp

        this.setState({
            data: {
                city,
                uv,
                temp,
            }
        })
    }
}

ReactDOM.render(<Weather lat={50.061389} lng={19.938333}/>, document.querySelector('#root'));