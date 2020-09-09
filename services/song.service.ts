import { AxiosService } from './axios.service';

export class SongService {
    axiosService: AxiosService;
    baseUrl: string = 'http://m.nhaccuatui.com';
    constructor() {
        this.axiosService = new AxiosService();
    }

    search(term: string) {
        return this.axiosService.get(this.baseUrl + '/ajax/search?q=' + encodeURIComponent(term)).then(data => {
            if (data && data.error_message == 'Success') {
                return data.data;
            }
            return Promise.reject(data);
        }).catch(err => Promise.reject(err));
    }

    searchAllSong(term: string, page: number, sort: number = 0): Promise<{ data: any[] }> {
        return this.axiosService.get(`${this.baseUrl}/ajax/page/search?page=${page}&q=${encodeURIComponent(term)}&b=title&s__type=bai-hat&sort=${sort}`).then(data => {
            if (data && data.error_message == 'Success') {
                let html = data.data.html;
                let songList: any[] = [];
                $(html).find('#ul_listItem').children().each((index, item) => {
                    songList.push({
                        id: $(item).children().first().find('a').attr('id'),
                        key: $(item).children().first().find('a').attr('key'),
                        keyEncrypt: $(item).children().first().find('span').attr('keyencrypt'),
                        url: $(item).children().first().find('a').attr('href'),
                        image: $(item).children().first().find('a').find('img').data('src'),
                        title: $(item).find('.box_info').find('.title_song').text(),
                        singer: $(item).find('.box_info').find('.singer_song').text().trim(),
                        singerUrl: $(item).find('.box_info').find('.singer_song').find('a').attr('href')
                    })
                });
                return {
                    data: songList
                };
            }
            return Promise.reject(data);
        }).catch(err => Promise.reject(err));
    }

    searchAllPlayList(term: string, page: number, sort: number = 0): Promise<{ data: any[] }> {
        return this.axiosService.get(`${this.baseUrl}/ajax/page/search?page=${page}&q=${encodeURIComponent(term)}&b=title&s__type=playlist&sort=${sort}`).then(data => {
            if (data && data.error_message == 'Success') {
                let html = data.data.html;
                let playList: any[] = [];
                $(html).find('#ul_listItem').children().each((index, item) => {
                    playList.push({
                        id: $(item).children().first().find('.clickPlaylistOption').attr('id'),
                        key: $(item).children().first().find('.clickPlaylistOption').attr('key'),
                        keyEncrypt: $(item).children().first().find('.ic_play_circle').attr('keyencrypt'),
                        url: $(item).children().first().find('.clickPlaylistOption').attr('url'),
                        image: $(item).children().first().find('img').data('src'),
                        title: $(item).find('.title_song').text(),
                        singer: $(item).find('.singer_song').text().trim(),
                        singerUrl: $(item).find('.singer_song').find('a').attr('href')
                    })
                });
                return {
                    data: playList
                };
            }
            return Promise.reject(data);
        }).catch(err => Promise.reject(err));
    }

    searchAllMV(term: string, page: number, sort: number = 0) {
        return this.axiosService.get(`${this.baseUrl}/ajax/page/search?page=${page}&q=${encodeURIComponent(term)}&b=title&s__type=mv&sort=${sort}`).then(data => {
            if (data && data.error_message == 'Success') {
                return data.data;
            }
            return Promise.reject(data);
        }).catch(err => Promise.reject(err));
    }

    getMediaInfo(key1: string, key2: string, key3: string) {
        return this.axiosService.get(`${this.baseUrl}/ajax/get-media-info?key1=${key1 || ''}&key2${key2 || ''}=&key3=${key3 || ''}`).then(data => {
            if (data && data.error_message == 'Success') {
                return data.data;
            }
            return Promise.reject(data);
        }).catch(err => Promise.reject(err));
    }

    test() {
        return this.axiosService.get(this.baseUrl + '/ajax/search?page=1&q=hay&b=title&s__type=all&sort=0');
    }
}