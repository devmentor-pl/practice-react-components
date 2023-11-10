import React from "react";
import PropTypes from "prop-types";
import Api from "./Api";

class Weather extends React.Component {
  state = {
    data: null,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { lat, lng, api } = this.props;

    api
      .loadData([lat, lng])
      .then(({ data }) => {
        const {
          city_name: city,
          app_temp: temp,
          weather: { description },
        } = data[0];
        this.setState({ data: { city, temp, description } }, () =>
          console.log(this.state)
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.data) return;

    const { city, temp, description } = this.state.data;
    return (
      <>
        <h2>
          {city}, {temp}°C
        </h2>
        <p>{description}</p>
      </>
    );
  }
}

Weather.propTypes = {
  api: PropTypes.instanceOf(Api).isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default Weather;
