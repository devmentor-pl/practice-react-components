import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Weather extends React.Component {
  key = "8166bd1b540b42039917fe1e6e4d13f0";
  url = `https://api.weatherbit.io/v2.0/current?key=${this.key}&lang=pl`;

  constructor(props) {
    super(props);

    const { lat, lng } = this.props;
    this.state = {
      data: null,
      lat,
      lng,
    };
  }

  async getWeather() {
    const { lat, lng } = this.state;

    try {
      const response = await fetch(`${this.url}&lat=${lat}&lon=${lng}`);

      if (!response.ok) {
        throw Error("Fatching failed!");
      }

      const { data } = await response.json();

      if (!data) {
        throw Error("Not found");
      }

      this.setState({
        data: data[0],
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { data } = this.state;

    if (data) {
      return (
        <div>
          <h1>Informacje o pogodzie...</h1>
          <h2>{data.city_name}</h2>
          <p>Aktualna temperatura to: {data.app_temp} &#8451;</p>
        </div>
      );
    }

    return null;
  }
}

root.render(<Weather lat={52.232222} lng={21.008333} />);
