import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';

const latitude = 37.8267;
const longitude = -122.4233;
const App = () => {
    return(
       <>
        <Weather latitude={latitude} longitude={longitude} />
       </> 
    )
}


ReactDOM.render(<App/>, document.querySelector('#root'));