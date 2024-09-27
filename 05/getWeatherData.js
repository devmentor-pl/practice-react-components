export function getWeatherData(lat, lng, key) {
	const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${key}`;

	return fetchData(url);
}

function fetchData(url) {
	const promise = fetch(url);
	return promise
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		})
		.catch(err => console.error(err))
		.finally(() => {
			console.log("Odpytywanie API zakończone!");
		});
}
