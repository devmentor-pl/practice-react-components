export function getData(lat, lng) {
        const key = 'd3f9a64ce4fd40fa822e80d34eddf722';
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl`;

        return fetch(apiUrl)
        .then((resp) =>{
            if(resp.ok) {
                return resp.json();
            }
            throw Error(resp.status)
        })
}