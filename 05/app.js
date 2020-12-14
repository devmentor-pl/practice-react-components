import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.lat = props.lat
        this.lng = props.lng
        this.url = 'https://api.weatherbit.io/v2.0/'
        this.key = '84af629ede014d02abea474810618f7e'
        this.state = {
            data: null
        }
    }

    render() {
        const { data } = this.state
        if(data) {
            return (<article>
                <h1>Informacje o pogodzie dla miasta szerogość geograficzna = { this.lat } oraz długość geograficzna = { this.lng }:</h1>
                <h3>Opis: { this.state.data.description }</h3>
                <h3>Temperatura: { this.state.data.temp } C</h3>
            </article>)
        }
        return null
    }

    componentDidMount() {
        fetch(`${this.url}current?key=${this.key}&lat=${this.lat}&lon=${this.lng}&lang=pl`)
        .then(resp => {
            if(resp.ok) { return resp.json() }
            return Promise.reject(resp)
        })
        .then( jsonObj => {
            this.setState({ data: {
                description: jsonObj.data[0].weather.description,
                temp: jsonObj.data[0].temp
            } })
        })
        .catch( () => alert('Błąd pobierania danych!') )
    }
}

Weather.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number
}

ReactDOM.render(<Weather lat={52.232222} lng={21.008333}/>, document.querySelector('#root'))