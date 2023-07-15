import React from "react";
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

class Weather extends React.Component {
  state = {
    lat: this.props.lat,
    lng: this.props.lng,
  }

  render() {
    const { data } = this.state;
    if (data) {
      const {city_name, temp} = data

      return (
        <>
        <h1>{city_name}</h1>
        <p>{temp}</p>
        </>
      )
    }

    return null;
  }

  componentDidMount() {
    const { lat, lng } = this.state
    const weatherData = fetch(`https://api.weatherbit.io/v2.0/current?key=0d3c2c3c4e9e4be4a45f74ad3c0ac232&lat=${lat}&lon=${lng}`)
    weatherData
      .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
      throw new Error('resp is not ok') 
    })
    .then(resp => {
      this.setState({
        data: resp.data[0],
      })

    })
    .catch(err => console.error(err))
  }
}





root.render(
  <>
  <Weather lat={52.232222} lng={21.008333} />
  <Weather lat={50.061389} lng={19.938333} />
  <Weather lat={51.11} lng={17.022222} />
  </>
)