import React, { Component } from "react";
import ReactDOM from "react-dom";

class Weather extends Component {
  state = {
    data: null,
  };
  constructor(props, lat, long) {
    super(props);
    (this.lat = lat), (this.long = long);
    this.key = "8645086ec1ba4004b6646b91304516c3";
    this.url = `https://api.weatherbit.io/v2.0/current?key=${this.key}&lang=pl`;
  }
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <>
          <h2>Pogoda dla: {data.city_name}</h2>
          <ul>
            <li>Temperatura: {data.temp}&#8451;</li>
            <li>Aktualnie: {data.weather.description}</li>
          </ul>
        </>
      );
    }
    return null;
  }

  componentDidMount() {
    const options = { method: "GET" };
    const { lat, long } = this.props;
    return this._fetch(options, this.url, `&lat=${lat}&lon=${long}`).then(
      (data) => {
        console.log(data);
        this.setState({ data: data.data[0] });
      }
    );
  }

  _fetch(options, path, additionalPath = "") {
    const url = path + additionalPath;
    return fetch(url, options).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp.statusText);
    });
  }
}

ReactDOM.render(
  <>
    <Weather lat="52.232222" long="21.008333" />,
    <Weather lat="50.061389" long="19.938333" />,
    <Weather lat="51.11" long="17.022222" />,
  </>,
  document.querySelector("#root")
);