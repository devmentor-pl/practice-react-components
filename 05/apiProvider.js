export function fetchWeatherData(lat, lng) {
  const apiKey = '338f265a980b48e19459c7cf7fb34484';
  const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl`;

  return fetch(apiUrl)
    .then((resp) => resp.json())
    .catch((err) => {
      console.error('Error fetching data: ', err);
    });
}
