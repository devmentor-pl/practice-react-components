import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        data: null
    }

    fetchData(URL) {
        return fetch(URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Error')
            })
    }
    componentDidMount() {
        const { lat, lng } = this.props
        console.log('props: ' + lat + ' ' + lng)

        const KEY = process.env.REACT_KEY
        const URL = `https://api.weatherbit.io/v2.0/current?key=${KEY}&lang=pl&lat=${lat}&lon=${lng}&units=M`

        const getData = this.fetchData(URL)
        getData
            .then(data => {
                console.log(data)
                this.setState({ data: data.data });
            })
            .catch(err => console.log(err.message))

    }
    render() {
        const { data } = this.state
        if (data) {
            return (
                <div>
                    <h1>Weather</h1>
                    {
                        <div>
                            <div><b>Miasto</b>: {this.state.data[0].city_name} </div>
                            <div><b>Data pogody</b>: {this.state.data[0].ob_time} </div>
                            <div><b>Ciśnienie</b>: {this.state.data[0].pres} <span>hPa</span></div>
                            <div><b>Temperatura</b>: {this.state.data[0].temp} <span>°C</span></div>
                            <div><b>Wschód słońca</b>: {this.state.data[0].sunrise}</div>
                            <div><b>Zachód słońca</b>: {this.state.data[0].sunset}</div>
                            <div><b>Opis</b>: {this.state.data[0].weather.description}</div>
                        </div>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <h1>No data</h1>
                </div>
            )

        }

    }
}

const App = () => {
    return (
        <div>
            <Weather lat={52.232222} lng={21.008333} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)