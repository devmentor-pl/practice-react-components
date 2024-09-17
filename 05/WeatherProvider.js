
export function get (lat, lon, signal) {
    const options = {
        mathod: 'GET',
    }
    const resource = `https://api.weatherbit.io/v2.0/current?key=93558fd78ea34b9182d933c681a32e9b&lat=${lat}&lon=${lon}&lang=pl`
    return fetchData(resource, options, signal)
}

function fetchData(resource, options, signal){
    const path = resource;
    const promise = fetch(path, options, signal)
    return promise
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        })
}