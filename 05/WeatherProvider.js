class WeatherProvider {
    constructor() {
        this.baseUrl = 'https://api.weatherbit.io/v2.0/current'
        this.key = '730d1b62752a45d69ba4fa85b948cfd8';
    }
     
    getData(lat, lon, lang) {
        const apiUrl = this._getUrl(lat, lon, lang);
        
        if (apiUrl) return this._fetch(apiUrl);

        return Promise.reject('Coordinates out of range')
    }

    _getUrl(lat, lon, lang='eng') {

        if (this._isValidCoordinate(lat, 90) && this._isValidCoordinate(lon, 180)) {
            return `${this.baseUrl}?key=${this.key}&lat=${lat}&lon=${lon}&lang=${lang}`;
        }
        
        return false;
    }

    _isValidCoordinate(coordinate, range) {
    
        if ((isNaN(coordinate)) || (coordinate < range*-1 ) || (coordinate > range)) {
            return false;
        }
        
        return true;    
    }
    
    _fetch(apiUrl) {    
        return fetch(apiUrl)
            .then(resp => {
                if (resp.ok) { return resp.json();}
                if(resp.status === 429) {
                    return Promise.reject('LIMIT EXCEEDED');
                }            
                return Promise.reject(`Kod błędu: ${resp.status}`);
            })        
    }

}

export default WeatherProvider