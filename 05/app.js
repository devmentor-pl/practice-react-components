

import React from "react";
import ReactDOM from "react-dom";
import {get} from "./api"



class AppWeather extends React.Component {

    constructor(props) {
        super(props)
       
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        this.fetchWeatherData();
    }

    fetchWeatherData() {

        const { lat, lng } = this.props;

        
         get(lat, lng).then(data => {
             this.setState({
                 data: data.data[0]
                
             })
         })
         
         .catch(error => console.log(error))
    }
          



    

    render() {
        const { data } = this.state;

        if(data) {
            const {
                city_name,
                lat, 
                lon,
                weather: { description },
                temp,
                wind_spd,
                clouds,
            } = data;
            console.log(data)

            return(
                <>
                <h1>Pogoda w {city_name} </h1>
                <p>Teraz w  miejscowości : {city_name} o szerokości { lat } i długości { lon }  </p>
                <p>jest temperatura : { temp } ° </p>
                <p>wieje wiatr z szybkością { wind_spd } m/s</p>
                <p> pokrycie chmur to: { clouds}% </p>
                <p> { description } </p>
                </>
            )





        } else {
            return null;
        }

    }

}





  ReactDOM.render(<AppWeather lat={51.11} lng={17.022222} />, document.querySelector('#root'));




  export default AppWeather;











