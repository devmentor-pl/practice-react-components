import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

class Weather extends React.Component {
  constructor(props) {
    super()
    this.latitude = props.lat,
    this.longitude = props.lng,
    this.key = 'c1882a4193374810a37038abc67e9c60'
  }
  state = {
    data: null
  }

  componentDidMount() {
      fetch(`https://api.weatherbit.io/v2.0/current?key=${this.key}&lat=${this.latitude}&lon=${this.longitude}&lang=pl`)
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        if(res.status === 429) {
          return Promise.reject('Limit!')
        }

        return Promise.reject('Error!' + res.status)
      })
      .then(weatherData => {
          this.setState(() => ({
              data: weatherData.data[0]
            }))
          })
      }
      
      render() {
    const { data } = this.state

    return data ?
    <div>
      <h1>miasto: {data.city_name}</h1>
      <ul>
        <li>temp: {data.temp} °C</li>
        <li>ciśnienie: {data.pres} mb</li>
        <li>zachmurzenie: {data.clouds} %</li>
        <li>siła wiatru: {data.wind_spd} m/s</li>
      </ul>

    </div>
      :
      <h1>brak informacji o pogodzie</h1>
      
    }
  }
  
  
root.render(<Weather lat={52.232222} lng={21.008333} />)