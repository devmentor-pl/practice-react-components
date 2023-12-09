export class WeatherForecast extends React.Component {
    state = {
        data: ''
    }

    render() {
        const { data } = this.state
        if (data) {
            const fullData = data.data[0] 
            const city = fullData.city_name
            const time = fullData.timezone
            const temp = fullData.temp
            const pres = fullData.pres
            const wind = fullData.wind_cdir_full
            const desc = fullData.weather.description

            return (<>
                <h2>Pogoda w {city}:</h2>
                <h4>Temperatura: {temp}</h4>
                <h4>Ciśnienie: {pres} hPa</h4>
                <h4>Strefa czasowa: {time}</h4>
                <h4>Kierunek wiatru: {wind}</h4>
                <h4>Opis: {desc}</h4>

            </>)

        } else {
            return null
        }
    }

    componentDidMount() {
        const { lat, lon } = this.props
        const key = 'c5e4f61e1a6c3b1521b541bc5c5a2ac5'
        const URL = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lon}&lang=pl`

        return fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({
                data: data
            }))
    }



}

export default WeatherForecast