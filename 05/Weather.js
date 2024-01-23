import React from "react";
class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        };
        
    }
    componentDidMount() {
        const {lat, lng} = this.props;
        const apiKey = '1cf960940d5c40e6a526a70d47722855'
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({data: data});
            })
            .catch((e)=>{
                console.error('błąd pobierania danych')
            })
    }
    render() {
        const {data} = this.state;
        if(data) {
            return <h1>Informacje o pogodzie...</h1>
        } else {
            return null
        }
    }

}
export default Weather