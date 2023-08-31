const API_KEY = '769bfea3884b48e2a12103546232908';
const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=/`;

export function get(city) {

	return fetchData(city);
}
function fetchData(city) {
	const path = url + city;
	const promise = fetch(path);
	return promise
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		})
		.catch(err => console.error(err))
		.finally(() => {
			console.log('Odpytywanie API zakończone!');
		});
}
