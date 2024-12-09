import React from "react";

export class Weather extends React.Component {
  state = {
    data: null,
  };
  key = "ae1e5f94eb254aaf99b6b687f161b9c6";
  render() {
    if (this.state.data) {
      const { lat, lng } = this.props;
      return (
        <div>
          Informacje o pogodzie:
          <p>
            Wspołrzedne {lat} : {lng}, temp: {this.state.data.temp}
          </p>
        </div>
      );
    }
    return null;
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    fetch(
      `https://api.weatherbit.io/v2.0/current?key=${this.key}&lat=${lat}&lon=${lng}`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error("Wystapil blad");
      })
      .then((response) => {
        this.setState({
          data: response,
        });
      })
      .catch((error) => {
        console.error("Wystapil blad", error.message);
      });
  }
}
