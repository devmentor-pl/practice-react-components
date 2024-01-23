import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { lat, lng } = this.props;

    const apiKey = "7d52688e95b94d259f3f5de564f5362c";

 const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl`;
//  const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=52.232222&lon=21.008333&key=7d52688e95b94d259f3f5de564f5362c`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych z API:", error);
      });
  }

  render() {
    const { data } = this.state;
  
    if (data && data.data && data.data.length === 0) {
      const weatherInfo = data.data[0];
  
      return (
        <div>
          <h1>Informacje o pogodzie</h1>
          <p>Miasto: {weatherInfo.city_name}</p>
          <p>Temperatura: {weatherInfo.temp} °C</p>
        </div>
      );
    }
  
    return null;
  }
}



root.render(<App lat={52.232222} lng={21.008333} />);
