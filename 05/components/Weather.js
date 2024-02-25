import React from "react";

class Weather extends React.Component {
    state = { data: null };
    key = "03880e356d9a419a85f038e826e963d9";
    render() {
        if (this.state.data) {
            const [first] = this.state.data;
            const { lat, lng } = this.props;
            const { city_name } = first;
            return (
                <p>
                    Pogoda w {city_name}: {first.temp}
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
                    return Promise.reject("LIMIT");
                }
                return Promise.reject("Error" + resp.status);
            })
            .then((object) => {
                this.setState({
                    data: object.data,
                });
            });
    }
}
export default Weather;
