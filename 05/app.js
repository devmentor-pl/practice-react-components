import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {  } 
    componentDidMount() {
        console.log('componentDidMount')
        console.log(this.props)
        const {lat, lng} = this.props
        console.log(lat +' '+ lng)

        fetch('https://randomuser.me/api?results=2')
        .then(res => {
            console.log(res)
            if(res.ok) {
                return res.json()
            }
            return Promise.reject('Error')
        })
        .then(data => console.log(data))
    }
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