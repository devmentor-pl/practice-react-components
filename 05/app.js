import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        data: null
    }

    render() {         
        const {data} = this.state;

        if (data) {
            const {lat, lng, temp, description} = data;
            return (
                <>
                    <h1>Pogoda w mieście o współrzędnych {lat}, {lng} to {temp} {description}</h1>
                </>
            )
        }

        return null;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));