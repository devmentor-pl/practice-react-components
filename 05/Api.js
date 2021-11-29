export default class Api {
    constructor(lat , lon) {
        this.key = '533a35b06f064afb9e648cca5cbb5099'
        this.lat = lat;
        this.lon = lon;
        this.lang = 'pl'
        this.url = `https://api.weatherbit.io/v2.0/current?key=${this.key}&lat=${this.lat}&lon=${this.lon}&lang=${this.lang}`;
    }


    async getWeatherData() {
        return this._fetch(this.url)
    }


    _fetch(url) {
        return fetch(url)
            .then( resp => {
                if(resp.ok) { return resp.json(); }
                if (resp.status === 400) { return Promise.reject('Incorrect coordiates') }
                return Promise.reject(resp)
            })
            .then ( data => { return data } )
            .catch ( err => { throw new Error(err) } )
    }
}

