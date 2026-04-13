export async function fetchWeatherData(lat, lng) {
  try {
    const resp = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.API_KEY}&lat=${lat}&lon=${lng}`);
    const data = await resp.json();

    if (data.error) {
      throw new Error('API response quest failed with message: \n' + data.error)
    }
    console.log('API response success!');
    return data;
  } catch (err) {
    console.log('Error: ' + err.message + '\n Please try again later')
  }
}