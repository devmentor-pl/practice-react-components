const apiUrl = `https://api.weatherbit.io/v2.0/current?key=2a79607cb0e94d4590a92c16e676c48e`;

export function load(lat, lot) {
  fetch(`${apiUrl}&lat=${lat}&lon=${lot}&lang=pl`)
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject("Error" + resp.status);
  })
}


