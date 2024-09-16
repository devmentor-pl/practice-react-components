import { apiStub } from "./ApiStub";

class WeatherProvider {
    constructor({ lat, lng }) {
        this.apiService = {
            API_URL: 'https://api.weatherbit.io/v2.0/current',
            API_KEY: 'ffc13da65b494013b12370e7bdecb3f0',
            API_ENABLED: true,
        };
        this.locationData = { lat, lng };
    }

    loadData() {
        return this._fetch();
    }

    _fetch() {
        const { lat, lng } = this.locationData;
        const { API_URL, API_KEY } = this.apiService;

        const url = `${API_URL}?key=${API_KEY}&lat=${lat}&lon=${lng}&lang=pl`;

        if (this._isApiEnabled()) {
            return fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }

                    return Promise.reject(response);
                })
                .then(response => {
                    const [weatherData] = response.data;

                    return weatherData;
                });
        }
        else {
            return new Promise((resolve) => {
                resolve(apiStub.data);
            });
        }
    }

    _isApiEnabled() {
        const { API_ENABLED } = this.apiService;

        return API_ENABLED ? true : false;
    }

}

export default WeatherProvider;