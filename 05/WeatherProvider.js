export default class WeatherProvider {
    constructor() {
        this.apiUrl = `https://api.weatherbit.io/v2.0/current?key=`,
            this.apiKey = '11d50ab196ba427990eee9027bd5506e'
    }

    load(lat, lng) {
        return fetch(`${this.apiUrl}${this.apiKey}&lat=${lat}&lon=${lng}&lang=pl`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(error)
            })
            .catch(error => console.log(error))
    }

}