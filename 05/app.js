


import React from "react";
import ReactDOM from "react-dom";




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
        const apiKey = '802f143dfe984e719934ac7c06bc64a8'
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl&units=I`;

        fetch(apiUrl)
         .then(response => {
             if(response.ok) {
                 return response
             }
             throw Error (response.status)
         })
         .then(response => response.json())
         .then(data => {
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












////////////////////////////////////////////////// TO NA DOLE NIE DZIAŁA  proszę o wskazówki////////////////



// import React from "react";
// import ReactDOM from "react-dom";


// class AppWeather extends React.Component {
//     constructor(props) {
//         super(props)
       
//         this.state = {
//             text: null,
//         }
//     }
// //*  miałam na początku bez componentDidMount i na stronie nic nie było, jakby render w ogóle się nie wykonał , więc pomyslałam, że to przez to, że nie mam tego componentDid... , więc dodałam to ComponentDid... i w środek dałam funkcję getWeather, ale to wtedy mam błąd w konsoli :  Uncaught TypeError: Cannot read property 'target' of undefined , tak jakbym nie mogła tam dać tej funkcji strzłkowej ?? nie wiem  chciałam trochę inaczej to zadanie zrobić, ale oczywiście mnie przerosło, proszę o podpowiedzi, chciałabym wyszukiwać sobie pogodę za pomocą inputa*/

//     // componentDidMount() {
//     //     this.getWeather()
//     // }
    
//    

//     getWeather = (e) => {
     
//         const value = e.target.value;
    
//         const apiKey = '802f143dfe984e719934ac7c06bc64a8'
//         const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${value}&key=${apiKey}`
//         fetch(apiUrl)
//             .then(res => {
//                 if(res.ok) {
//                 return res;
//                 }
//                 throw Error(res.status.text)
//             })
            
//             .then(res => res.json())
            
//             .then(data => {
            
//                 this.setState({
//                     text: data.data[0]
                    
//                 })
//             })
        
//             .catch(err => console.log(err))

//     }




//     render() {

//         const { text } = this.state;
//         if(text) {

//             const {
//                 lat, 
//                 lon,
//                 city_name, 
//                 weather: { description },
//                 temp,
//             } = text

//             return(
//                 <section>
//                     <h1>Pogoda:</h1>
//                     <p> Miasto:  {city_name} </p>
//                     <p> Współrzędne: { lat } , { lon } </p>
                  
//                 </section>
//             )
//         } else {
//             return null;
//         }

    

        
     
//     }
// }





//   ReactDOM.render(<AppWeather/>, document.querySelector('#root'));




//   export default AppWeather;