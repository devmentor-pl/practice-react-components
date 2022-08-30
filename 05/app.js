import React from 'react'
import ReactDOM from 'react-dom'
import Weather from './components/Weather'

const App = () => {
    return (
        <>
            <Weather lat={-22.908333} lng={-43.196388} />
            <Weather lat={52.2322222} lng={21.008333} />            
            <Weather lat={29.652491} lng={91.172112} />
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))