class WeatherApi {
    constructor({lat, lng}) {
        this.key = 'd3d0aaaf55974149b62cadbc598f6562'
        this.lat = lat
        this.lng = lng
        this.url = this.getUrl()
    }

    getUrl() {
        const url = `https://api.weatherbit.io/v2.0/current?key=${this.key}&lang=pl&lat=${this.lat}&lon=${this.lng}`
        return  url
    }
    getData() {
        return fetch(this.url)
            .then(resp => {
                if (resp.ok) return resp.json()
                else Promise.reject('Niepoprawne dane')
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone!');
            });
    }
}

export default WeatherApi