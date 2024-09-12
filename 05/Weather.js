import React from "react";
import { fetchData } from "./getData";
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
        fetchData(lat, lng)
        .then(data => this.setState({data: data}))
        .catch(err => console.log(err))
    }
}

export default Weather;
