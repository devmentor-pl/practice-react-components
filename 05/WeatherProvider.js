export function get (resource, signal) {
    const options = {
        mathod: 'GET',
    }
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