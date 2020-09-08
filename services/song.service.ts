import { AxiosService } from './axios.service';

export class SongService {
    axiosService: AxiosService;
    constructor() {
        this.axiosService = new AxiosService();
    }

    test() {
        this.axiosService.get('http://m.nhaccuatui.com/ajax/search?page=1&q=hay&b=title&s__type=all&sort=0').then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }
}