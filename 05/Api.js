class Api {
  constructor() {
    this.API_KEY = "";
    this.URL = "https://api.weatherbit.io/v2.0/current";
  }

  loadData(coordsArr) {
    const coordsUrl = this.#createCordsString(coordsArr);
    return this.#fetch(coordsUrl);
  }

  #fetch(coords) {
    return fetch(
      `${this.URL}?key=${this.API_KEY}${coords}&lang=pl`
    ).then((resp) => {
      if (resp.ok) return resp.json();
      return Promise.reject(resp);
    });
  }

  #createCordsString([lat, long]) {
    return `&lat=${lat}&lon=${long}`;
  }
}

export default Api;
