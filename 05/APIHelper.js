export { fetchURLWithParameters }

async function fetchURLWithParameters(lat, lng) {
  const url = `https://api.weatherbit.io/v2.0/current?key=35352f1c52b84dfbb0efc4302767cf8f&lat=${lat}&lon=${lng}&lang=pl`

  const res = await fetch(url);
  return await (res.ok ? res.json() : Promise.reject(res));
}
