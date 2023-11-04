export function fetchData(lat, lng) {
    const url = `https://api.weatherbit.io/v2.0/current?key=43a4a4697c3a462fb478bc55b9614ed9&lat=${lat}&lon=${lng}&units=M&lang=pl`;
    return fetch(url)
    .then(resp => resp.json())
    .then(data => data)
    .catch(error => console.log(error))
}
