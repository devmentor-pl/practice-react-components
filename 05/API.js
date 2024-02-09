export async function getWeatherData (key,lat,lng) {
    const resp =  await fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl&units=M`);
    const weatherData = await resp.json();
    return weatherData;
}