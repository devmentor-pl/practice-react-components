
const key = '730d1b62752a45d69ba4fa85b948cfd8';
const url = 'https://api.weatherbit.io/v2.0/current?key='+key

export function load(lat, lng) {
    return fetch(`${url}&lat=${lat}&lon=${lng}`)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            if(resp.status === 429) {
                return Promise.reject('LIMIT');
            }

            return Promise.reject('Error!' + resp.status);
        });
}