import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
        };
      }
    render () {
        if(this.state.data !== null) {
        const {lat, lng} = this.props
        return (<p lat={lat} lng={lng}>Dzisiejszą pogodę możemy określić jako: {this.state.data.data[0].weather.description}.</p>)
    }
    return null
    }
    componentDidMount () {
        fetch(`https://api.weatherbit.io/v2.0/current?key=832e544e55c84199b5277249cedeb143&lat=${this.props.lat}&lon=${this.props.lng}&lang=pl`)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
}

ReactDOM.render(<Weather lat={52.232222} lng={21.008333} />,document.querySelector('#root'))