const getWeatherData = (lat, lng) => {
	const API_KEY = 'f93c6d18427e4c79aca3fb72a6ad546f';
	const URL = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lng}&units=I&lang=pl`;

	return _fetch(URL);
};

const _fetch = (API_URL) => {
	return fetch(API_URL).then((resp) => {
		if (resp.ok) {
			return resp.json();
		}
		return Promise.reject(resp);
	});
};

export default getWeatherData;
