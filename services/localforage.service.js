const localforage = require('localforage');

export default class LocalForageService {
    constructor() {
        localforage.config({
            driver: localforage.INDEXEDDB,
            name: 'EngStudyDB',
            storeName: 'keyvaluepairs'
        });
        this.db = localforage;
    }
}