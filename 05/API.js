class API {
  constructor(url = '') {
    this.url = url;
  }

  async fetchData() {
    return await this._fetch();
  }

  async addData(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return await this._fetch(options);
  }

  async removeData(id) {
    const options = {method: 'DELETE'};
    return await this._fetch(options, `/${id}`);
  }

  async updateData(id, data) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    };
    return await this._fetch(options, `/${id}`);
  }

  async _fetch(options, additionalPath = '') {
    const url = this.url + additionalPath;
    try {
      const resp = await fetch(url, options);
      if (resp.ok) {
        return await resp.json();
      } else {
        throw new Error(resp.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default API;
