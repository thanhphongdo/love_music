import LocalForageService from './localforage.service';
const axios = require('axios').default;
const localForage = new LocalForageService();
export default class AxiosService {
    constructor() {
        this.axios = axios;
    }
    get(url) {
        return axios.get(url).then(res => {
            return res.data;
        }).catch(err => {
            return Promise.reject(err);
        });
    }
    request(url, method, headers, params) {
        return axios.request({
            url: url,
            method: method,
            headers: headers,
            params: params
        }).then(res => {
            return res.data;
        }).catch(err => {
            return Promise.reject(err);
        });
    }
    storage(key, obj) {
        return localForage.db.setItem(key, obj);
    }
    restore(key) {
        return localForage.db.getItem(key);
    }
}