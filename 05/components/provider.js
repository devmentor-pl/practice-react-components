const key = '7950d7e4e3c64903a92dfc9c3069c67c'
const url = `https://api.weatherbit.io/v2.0/current?key=${key}`

export function load(lat, lng) {
  const promise = fetch(`${url}&lat=${lat}&lon=${lng}&lang=pl`)

  return promise
    .then(resp => {
      if(resp.ok) { return resp.json() }
    })
}