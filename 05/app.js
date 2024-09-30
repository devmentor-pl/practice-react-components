import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {

  state = {
    data : null
  }

  myKey = '3a021506780540bd958064a8f3c522c0'

  render () {
    if(this.state.data) {
      const [first] = this.state.data
        const {lat, lng} = this.props
        return <p>Weather latitude: {lat} longitude: {lng} {first.city_name} temperature: {first.temp}</p>
      }

      return <p>Loading...</p>
  }

  componentDidMount () {
    const {lat, lng} = this.props
    fetch(`https://api.weatherbit.io/v2.0/current?key=${this.myKey}&lat=${lat}&lon=${lng}`)
      .then((response) => {
        if(response.ok) {
          return response.json()
        }

        if(response.status === 429) {
          return Promise.reject('DAY LIMIT')
        }

        return Promise.reject('Error !!! ' + response.status)
      })
      .then((value) => {
        this.setState({
          data: value.data
        })
      })
  }
}

root.render(<Weather lat={52.232222} lng={21.008333}/>);
