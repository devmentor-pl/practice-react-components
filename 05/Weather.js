import React from "react";


class Weather extends React.Component {
    state = {
        data: null,
    }
    render() {
        const { data } = this.state;
        if(data) {
           const dataArr = data.data;
           const detailsList = dataArr.map(item => 
           <li>{item.city_name}
           <p>temp: {item.temp} &#8451;</p>
           <p>opis: {item.weather.description}</p>
           </li>
           )
            return <ul>{detailsList}</ul>
        }
       
    }
    componentDidMount() {    
        const {lat, lng} = this.props
        const url = `https://api.weatherbit.io/v2.0/current?key=43a4a4697c3a462fb478bc55b9614ed9&lat=${lat}&lon=${lng}&units=M&lang=pl`;  
        fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({ data: data}))
        .catch(error => console.log(error))
    }
}

export default Weather;
