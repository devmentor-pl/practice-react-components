import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
    state = {
        weatherData: null
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('mounted');
    }

    render() {
        return (
            <div style={weatherCardStyle}>
                <h4>POGODA</h4>
                <h1>Opole</h1>
                <ul>Współrzędne:
                    <li>lat</li>
                    <li>lon</li>
                </ul>
                <h4>Szczegółowe informacje:</h4>
                <p> weather description </p>
                <h3>temp </h3>
            </div>
        )
    }
}

const weatherCardStyle = {
    height: 400,
    width: 300,
    borderRadius: 10,
    border: '1px solid #E74C3C',
    padding: 30
}

ReactDOM.render(<App/>, document.querySelector('#root'))


// c12166f6b699496195f7b2ca51407ce4