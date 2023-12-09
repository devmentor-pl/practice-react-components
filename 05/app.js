import React from 'react'
import ReactDOM from 'react-dom'

import WeatherForecast from './WetaherForecast'


ReactDOM.render(
    <div>
       <WeatherForecast lat='70' lon='90'/> 
       <WeatherForecast lat='630' lon='80'/> 
       <WeatherForecast lat='-90' lon='16'/> 
       <WeatherForecast lat='-10' lon='10'/> 
    </div>
    , 
    document.querySelector('#root')
)