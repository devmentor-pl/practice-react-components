export function get(lat, lng) {
    const apiKey = '802f143dfe984e719934ac7c06bc64a8'
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl&units=I`;

    return fetch(apiUrl)
        .then(response => {
            if(response.ok) {
                return response
            }
            throw Error (response.status)
        })
        .then(response => response.json())
}