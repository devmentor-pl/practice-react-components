function fakeWeatherData(lat, lng, key) {
    const fakeResponse = {
        city_name: "Warsaw",
        weather: {
            description: "Sunny",
        },
        temp: 25,
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 1000);
    })
}

export default fakeWeatherData;