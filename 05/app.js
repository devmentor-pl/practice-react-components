import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Weather extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const { lat, lon } = this.props;
    const API_KEY = "3c7780be665b4f53a8f185db308d710e";
    const url = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lon}&lang=pl`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Błąd podczas pobierania danych");
        }
        return res.json();
      })
      .then((json) => {
        this.setState({ data: json.data[0] });
      })
      .catch((err) => {
        console.error("Błąd:", err);
        this.setState({ error: err.message });
      });
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div>
          <p>Aktualna pogoda w mieście {data.city_name}:</p>
          <p>Aktualnie jest {data.weather.description}</p>
        </div>
      );
    }
    return null;
  }
}

root.render(<Weather lat={50.061389} lon={19.938333} />);
