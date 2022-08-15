import React from 'react';

import {load} from './provider';

class Weather extends React.Component {
    state = {
        data: null,
    }

    render() {
        const {data} = this.state;
        const {lat, lng} = this.props;

        if(data) {
            const [first] = data;
            return <p>Pogoda! {lat} {lng} => {first.temp}</p>
        }

        return null;
    }

    componentDidMount() {
        const  {lat, lng} = this.props;

        load(lat, lng)
            .then(object => {
                this.setState({
                    data: object.data,
                })
            });
    }
}

export default Weather;