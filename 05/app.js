import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './Weather';

ReactDOM.render(
    <div>
        <Weather lat={52.232222} lng={21.008333}/>
        <Weather lat={51} lng={17}/>
    </div>, 
    document.querySelector('#root')
);