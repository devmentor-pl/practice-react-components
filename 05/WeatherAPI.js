class WeatherAPI {
	constructor() {
		this.API_KEY = '195f1a7ae96d4ad488f9543021ea79c8';
		this.url = `https://api.weatherbit.io/v2.0/current?key=${this.API_KEY}`;
	}

	loadData(lat, lng) {
		return this._fetch(`&lat=${lat}&lon=${lng}&lang=pl`);
	}

	_fetch(additionalPath = '') {
		const url = this.url + additionalPath;

		return fetch(url).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}

			if (resp.status === 429) {
				return Promise.reject('Osiągnięto dzienny limit API');
			}

			return Promise.reject(resp);
		});
	}
}

export default WeatherAPI;
