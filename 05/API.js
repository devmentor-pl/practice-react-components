class API {
  constructor() {
    this.key = "8645086ec1ba4004b6646b91304516c3";
    this.url = `https://api.weatherbit.io/v2.0/current?key=${this.key}&lang=pl`;
  }

  load(lat, long) {
    const options = { method: "GET" };
    return this._fetch(options, this.url, `&lat=${lat}&lon=${long}`);
  }

  _fetch(options, path, additionalPath = "") {
    const url = path + additionalPath;
    return fetch(url, options).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp.statusText);
    });
  }
}
export default API;
