import React from "react";
import ReactDOM from "react-dom";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    const apiKey = "cc10888f25a345349699fbb10686855f";
    const { lat, lng } = this.props;
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl&units=I`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        const { data } = json;

        if (data.length > 0) {
          this.setState({
            data: data[0],
          });
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { data } = this.state;

    if (data) {
      const {
        lat,
        lon,
        weather: { description },
        temp,
      } = data;

      return (
        <>
          <h1>Informacje o pogodzie</h1>
          <section>
            <p>
              Pogodę w obecnej chwili w miejscu o szerokości geograficznej:
              <strong>{lat}</strong> i długości geograficznej:
              <strong>{lon}</strong> można określić jako:
              <strong>{description}</strong>, gdzie temperatura wynosi:
              <strong>{temp}</strong>&#8457;
            </p>
          </section>
        </>
      );
    }

    return null;
  }
}

ReactDOM.render(
  <Weather lat={52.232222} lng={21.008333} />,
  document.querySelector("#root")
);
