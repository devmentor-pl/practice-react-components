import React from "react";
import { createRoot } from "react-dom/client";
import { load } from "./api";

const root = createRoot(document.querySelector("#root"));

class WeatherCheck extends React.Component {
  state = {
    data: null,
  };

  render() {
    const { data } = this.state;
    //console.log(data)
    if (data) {
      const city = data[0].city_name;
      const weather = data[0].weather.description;

      // renderuj dopiero jak pobierzesz dane z API

      return (
        <section>
          <h1>informacje o pogodzie... </h1>
          <h2>Miasto: {city}</h2>
          <h2>Pogoda: {weather}</h2>
        </section>
      );
    }
    return null;

    // nic nie renderuj
    //return null;
  }

  componentDidMount() {
    const { lat, lot } = this.props;

    load(lat, lot)
      .then((obj) => {
      this.setState({
        data: obj.data,
      });
    });
  }
}

root.render(<WeatherCheck lat={52} lot={21} />);
