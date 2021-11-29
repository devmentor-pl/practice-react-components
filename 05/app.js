import React from "react";
import ReactDOM from "react-dom";

class Weather extends React.Component {
  state = {
    data: null,
  };

  constructor(props) {
    super(props);
    this.url = "https://api.weatherbit.io/v2.0/current";
    this.key = "7438c0b6248546189e7ab4eda73811c2";
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <section>
          <h1>Weather</h1>
          <p>
            City: <b>{data.city_name}</b>
          </p>
          <p>
            Temperature: <b>{data.temp} &#8451;</b>
          </p>
          <p>
            Description: <b>{data.weather.description}</b>
          </p>
          <p>
            Wind direction:<b> {data.wind_cdir_full}</b>
          </p>
        </section>
      );
    } else {
      return null;
    }
  }

  componentDidMount() {
    const { lat, lon } = this.props;
    this.getData(lat, lon);
  }

  getData(lat, lon) {
    fetch(`${this.url}?key=${this.key}&lat=${lat}&lon=${lon}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data.data[0] }));
  }
}

ReactDOM.render(
  <Weather lat={52.232222} lon={21.008333} />,
  document.querySelector("#root")
);
