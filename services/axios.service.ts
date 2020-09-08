import axios, { AxiosStatic, AxiosRequestConfig } from 'axios';
export class AxiosService {
    axios: AxiosStatic;

    constructor() {
        this.axios = axios;
    }
    get(url: string, config?: AxiosRequestConfig) {
        return axios.get(url, config || undefined).then(res => {
            return res.data;
        }).catch(err => {
            return this.error(err);
        });
    }

    post(url: string, config?: AxiosRequestConfig) {
        return axios.post(url, config || undefined).then(res => {
            return res.data;
        }).catch(err => {
            return this.error(err);
        });
    }

    put(url: string, config?: AxiosRequestConfig) {
        return axios.put(url, config || undefined).then(res => {
            return res.data;
        }).catch(err => {
            return this.error(err);
        });
    }

    delete(url: string, config?: AxiosRequestConfig) {
        return axios.delete(url, config || undefined).then(res => {
            return res.data;
        }).catch(err => {
            return this.error(err);
        });
    }

    patch(url: string, config?: AxiosRequestConfig) {
        return axios.patch(url, config || undefined).then(res => {
            return res.data;
        }).catch(err => {
            return this.error(err);
        });
    }

    head(url: string, config?: AxiosRequestConfig) {
        return axios.head(url, config || undefined).then(res => {
            return res.data;
        }).catch(err => {
            return this.error(err);
        });
    }

    error(err: any) {
        return Promise.reject(err);
    }
}