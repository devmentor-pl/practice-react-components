import React from 'react';

class Weather extends React.Component {
    state = { data: [], loading: true, error: null };

    componentDidMount() {
        const { lat, lng } = this.props;
        const url = `https://api.weatherbit.io/v2.0/current?key=2152939f82134cf69940f7dd9139bf89&lang=pl&lat=${lat}&lon=${lng}`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Cannot get data!');
                }
                return res.json();
            })
            .then(data => {
                this.getWeatherInfo(data);
            })
            .catch(error => {
                this.setState({ error });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    getWeatherInfo = (data) => {
        const { data: [{ city_name, temp, weather: { description } }] } = data;
        this.setState({ data: [city_name, temp, description] });
    };

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <>
                <h1>Weather information:</h1>
                <ul>
                    {data.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Weather;
