import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {  } 
    render() { 
        console.log(this.props)
        return (
            <h1>Weather</h1>
        );
    }
}

const App = () => {
    return ( 
        <div>
            <Weather lat={52.232222} lng={21.008333} />
        </div>
     );
}
 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)