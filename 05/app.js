import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

class Weather extends React.Component {
	state = {
		data: [],
	}

	render() {
		const { data } = this.state

		if (data.length > 0) {
			return (
				<>
					<h1>informacje o pogodzie...</h1>
					<article>{this.weatherInfo()}</article>
				</>
			)
		}
		return null
	}

	componentDidMount() {
		const key = '0f570808a70a482489cb41830b52bf66'
		fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${this.props.lat}&lon=${this.props.lon}&lang=pl`)
			.then(response => {
				if (response.ok) {
					return response.json()
				} else {
					return Promise.reject(`Http error: ${response.status}`)
				}
			})
			.then(response => {
				const responseData = response.data
				this.setState({
					data: responseData,
				})
			})
			.catch(error => {
				console.error(error)
			})
	}

	weatherInfo() {
		const { data } = this.state
		return data.map(item => {
			console.log(item)
			const {
				city_name,
				temp,
				weather: { description: weatherDescription },
			} = item

			return (
				<>
					<p>
						Pogoda w mieście: {city_name}. Temperatura {temp} C, {weatherDescription.toLowerCase()}.
					</p>
				</>
			)
		})
	}
}

root.render(<Weather lat="52.232222" lon="21.008333" />)
