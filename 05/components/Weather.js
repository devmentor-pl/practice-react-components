import React from "react";

class Weather extends React.Component {
    state = {
        data: null
    }

    render() {
        const { lat, lng } = this.props
        const { data } = this.state

        if (data) {
            const [details] = data
            const temp = details.temp
            const info = details.weather.description
            return (
                <section>
                    <p>Pogodę w obecnej chwili w miejscu o szerokości geograficznej: <strong >{lat}</strong> i długości geograficznej: <strong >{lng}</strong> można określić jako: <strong >{info}</strong>, gdzie temperatura wynosi: <strong>{temp}</strong>&#8451;</p>
                </section >
            )
        } else {
            return null
        }
    }

    componentDidMount() {
        const { lat, lng } = this.props
        const key = 'd3d0aaaf55974149b62cadbc598f6562'
        const url = `https://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${lat}&lon=${lng}`
        fetch(url)
            .then(resp => {
                if (resp.ok) return resp.json()
                else Promise.reject('Niepoprawne dane')
            })
            .then(this.getData.bind(this))
            .catch(err => console.log(err))
    }

    getData({ data }) {
        this.setState({ data: data })
    }
}

export default Weather