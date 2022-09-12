class weatherInfoProvider {
    constructor() {
        this.url=`https://api.weatherbit.io/v2.0/current?`
    }

    get(resource) {
        return this._fetch(resource);
    }

    _fetch(resource='', options={method: 'GET'}, id='') {
        const path = this.url + resource + `/${id}`;
        const promise = fetch(path, options);
        return promise
            .then(resp=> {
                if(resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone');
            })
    }

}

export default weatherInfoProvider;

