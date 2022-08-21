import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {

    state = {
        status: null,
        city: null,
        dateTime: null,
        temp: null,
        press: null,
        sunrise: null,
        sunset: null,

    }


    render() {
        const status = this.state.status
        if (status === 'ok') {

            return (
                <section >

                    <h1>Informacje o pogodzie</h1>
                    <h2>{this.state.city}:</h2>
                    <ul>
                        <li>Zaktualizowano: {this.state.dateTime}</li>
                        <li>Temperatura: {this.state.temp}</li>
                        <li>Ciśnienie: {this.state.press}</li>
                        <li>Wschód: {this.state.sunrise}</li>
                        <li>Zachód: {this.state.sunset}</li>

                    </ul>

                </section>
            )

        } else {
            return null
        }

    }



    componentDidMount() {

        const { lat, lng } = this.props
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=69cd9dca745c4b2fb467e5c8d45365ff&lat=${lat}&lon=${lng}&lang=pl`

        const promise = fetch(apiUrl)

        promise.then(resp => {
            if (resp.ok) {
                return resp.json()
            }

            if (resp.status === 429) {
                return Promise.reject('Przekroczono limit!')
            }

            return Promise.reject(resp)
        })
            .then(weatherData => {
                this.setState({
                    status: 'ok',
                    city: weatherData.data[0].city_name,
                    press: weatherData.data[0].pres,
                    sunset: weatherData.data[0].sunset,
                    sunrise: weatherData.data[0].sunrise,
                    dateTime: weatherData.data[0].ob_time,
                    temp: weatherData.data[0].temp
                })

                console.log(weatherData.data)
            })
            .catch(err => console.log(err))
            .finally(() => { console.log('Pobieranie API zakończone') })

    }


}



ReactDOM.render(
    <App lat={52.4064} lng={16.9252} />,
    document.querySelector('#root'))