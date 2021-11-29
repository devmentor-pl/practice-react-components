import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const url = `https://api.weatherbit.io/v2.0/current?key=a0d63ece07e944e18ce685e9a119e6bd&lat=52.232222&lon=21.008333&lang=pl`;
        const promise = fetch(url);

        return promise
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .then((d) => {
                const weather = {
                    city: d.data[0].city_name,
                    conditions: d.data[0].weather.description,
                    temp: d.data[0].app_temp,
                };
                this.setState({ data: weather });
                return weather;
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { data } = this.state;
        if (data) {
            // renderuj dopiero jak pobierzesz dane z API

            return (
                <>
                    <h1>informacje o pogodzie...</h1>
                    <Weather
                        city={this.state.data.city}
                        conditions={this.state.data.conditions}
                        temp={this.state.data.temp}
                    />
                </>
            );
        }

        // nic nie renderuj
        return null;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

/* 
<p>
                        W miescie {this.state.data.city} jest obecnie{" "}
                        {this.state.data.conditions.toLowerCase()}, a
                        temperatura wynosi {this.state.data.temp}
                    </p>*/
