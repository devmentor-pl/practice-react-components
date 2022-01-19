import React from "react";
import ReactDOM from "react-dom";

class WeatherApp extends React.Component {
  state = {
    cityName: "",
    iconID: "",
    temp: "",
    weatherDesc: "",
  };

  render() {
    const { cityName, temp, weatherDesc, iconID } = this.state;

    const weatherContainer = {
      alignItems: "center",
      color: "#373131",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Helvetica, sans-serif",
      justifyContent: "center",
      marginTop: "10vh",
    };
    const weatherBox = {
      alignItems: "center",
      backgroundColor: "#F6F4F4",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      minWidth: "30vw",
      padding: "20px",
    };

    if (cityName && temp && weatherDesc && iconID) {
      return (
        <section style={weatherContainer}>
          <div style={weatherBox}>
            <h1>{cityName}</h1>
            <h2>{temp} ℃.</h2>
            <h2> {weatherDesc}</h2>
            <picture>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${iconID}.png`}
              ></img>
            </picture>
          </div>
        </section>
      );
    }
    return null;
  }
  componentDidMount(props) {
    const { lat, lng } = this.props;
    const APIKey = `2d15c1f36cfb4b6796484745262c485a`;
    return fetch(
      `https://api.weatherbit.io/v2.0/current?key=${APIKey}&lat=${lat}&lon=${lng}&lang=pl&units=M`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(resp);
      })
      .then((data) => {
        this.setState({
          cityName: data.data["0"]["city_name"],
          temp: data.data["0"]["temp"],
          weatherDesc: data.data["0"]["weather"]["description"],
          iconID: data.data["0"]["weather"]["icon"],
        });
        console.log(data.data["0"]);
      })

      .catch((err) => {
        console.error(err);
      });
  }
}

ReactDOM.render(
  <WeatherApp lat={"52.232222"} lng={"21.008333"} />,
  document.querySelector("#root")
);
