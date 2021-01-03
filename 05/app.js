import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
  state = {
    data: [],
  };

  render() {
    const { data } = this.state;

    const printWeatherData = data.map((weatherArray) => {
      const weatherArrayElements = Object.entries(weatherArray);

      return weatherArrayElements.map((weatherDescription) => {
        const weatherEntry = weatherDescription.join(' : ');
        return <li>{weatherEntry}</li>;
      });
    });

    if (data.length > 0) {
      return (
        <>
          <h1>Informacje o pogodzie...</h1>
          <ul>{printWeatherData}</ul>
        </>
      );
    }
    return null;
  }

  componentDidMount() {
    fetch(
      `https://api.weatherbit.io/v2.0/current?key=21e8e9f495af448cab8a8ba9da998436&lat=${this.props.lat}&lon=${this.props.lon}&lang=pl`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ data: data.data });
      })
      .catch((err) => console.error(err));
  }
}

ReactDOM.render(
  <Weather lat='52.232222' lon='21.008333' />,
  document.querySelector('#root')
);
