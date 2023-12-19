export async function getWeatherData(lat, lng) {
    const apiKey = 'f244bf8743ea42788e8bdc3e9aa9c35d';
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}`;
    try {
        return await fetchData(url);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchData:", error);
        throw error; 
    } finally {
        console.log("API query completed!");
    }
}