import React from 'react'
import ReactDOM from 'react-dom'

import Weather from './Weather'


ReactDOM.render(
    <div>
       <Weather lat='50' lon='100'/> 
       <Weather lat='-30' lon='50'/> 
       <Weather lat='90' lon='8'/> 
       <Weather lat='-90' lon='150'/> 
    </div>
    , 
    document.querySelector('#root')
)