import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class WeatherCheck extends React.Component {
  constructor(props) {
    super(props);
    const {lat} = this.props;
    this.state = {
      data: `https://api.weatherbit.io/v2.0/current?key=44cf234f09214818a8e48efc2c273579&lat=${(lat="123")}&lon=-78.6382&lang=pl`,
    };
  }

  render() {
    const { data } = this.state;
    if (data) {
      // renderuj dopiero jak pobierzesz dane z API
      return <h1>informacje o pogodzie...</h1>;
    }

    // nic nie renderuj
    return null;
  }

  componentDidMount() {
    const { data } = this.state;
    const promise = fetch(data);

    promise
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(resp);
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err))
      .finally(() => {
        console.log("odpytywanie zakończone");
      });
  }
}

root.render(<WeatherCheck />);
