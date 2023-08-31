import React from 'react';

class Weather extends React.Component {
  state = {
    data: null,
  };

  key = '05f82274db3145b58cff937f33fb3021';
  render() {
    if (this.state.data) {
      console.log(this.state.data);
      const { first } = this.state.data;
      const { lat, lng } = this.props;
      return (
        <p>
          Weather {lat}, {lng} = {first.temp}
        </p>
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

        if (resp.status === 429) {
          return Promise.reject('Limit');
        }

        return Promise.reject('Error!' + resp.status);
      })
      .then((dataResp) => {
        this.setState({ data: dataResp.data });
      });
  }
}

export default Weather;
