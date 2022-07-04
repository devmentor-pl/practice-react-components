import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    state = {
        data: null
    }

    fetchData(URL) {
        return fetch(URL)
            .then(res => {
                console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Error')
            })
    }
    componentDidMount() {
        console.log('componentDidMount')
        console.log(this.props)
        const { lat, lng } = this.props
        console.log(lat + ' ' + lng)

        const KEY = process.env.REACT_KEY
        console.log(KEY)
        const URL = `https://api.weatherbit.io/v2.0/current?key=${KEY}&lang=pl&lat=${lat}&lon=${lng}&units=M`

        const getData = this.fetchData(URL)
        getData
            .then(data => {
                console.log(data)
                this.setState({ data: data.data });
            })
            .catch(err => console.log(err.message))

    }
    render() {
        console.log(this.props)
        const { data } = this.state
        if (data) {
            return (
                <div>
                    <h1>Weather</h1>
                    {

                    }
                </div>
            )
        } else {
            return (
                <div>
                    <h1>No data</h1>
                </div>
            )

        }

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