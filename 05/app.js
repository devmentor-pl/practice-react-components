import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather';

class App extends React.Component {


    render() {
        return <Weather lat={52.232222} lng={21.008333} />
    }

    
}


ReactDOM.render(<App/>, document.querySelector('#root'));