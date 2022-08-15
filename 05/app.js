import React from 'react'
import ReactDOM from 'react-dom'
import Weather from './components/Weather'

const App = () => {
    return (
        <>
            <Weather lat={-22.908333} lng={-43.196388} />
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))