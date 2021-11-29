export default class Api {
    constructor(lat , lon) {
        this.key = '038e0c12103f48d4994ef3e2eb391ee2'
        this.lat = lat;
        this.lon = lon;
        this.lang = 'pl'
        this.url = `https://api.weatherbit.io/v2.0/current?key=${this.key}&lat=${this.lat}&lon=${this.lon}&lang=${this.lang}`;
    }


    async getWeatherData() {
        return this._fetch(this.url);
    }

    _fetch(url) {
        return fetch(url)
            .then( resp => {
                if(resp.ok) { return resp.json(); }
                if (resp.status === 400) { return Promise.reject('Incorrect coordiates') }
                if (resp.status === 403) { return Promise.reject('API key is incorrect') }
                return Promise.reject(resp)
            })
            .catch ( err => console.log(err) )
    }
}

