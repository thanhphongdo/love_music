// import ParseService from '../../services/parse.service';
// const Parse = new ParseService();
// import AxiosService from '../../services/axios.service';
// const axios = new AxiosService();
const courseDataUrl = '/course/index.json';
export default {
    namespaced: true,
    state: () => ({
        message: "test messahe"
    }),
    getters: {

    },
    mutations: {
        fetchCourse(state, {callback, error}) {
            if (state.listCourse.length) {
                callback(state.listCourse);
                return;
            }
            // axios.restore(state.key).then(courseStorage => {
            //     if (courseStorage && courseStorage.length) {
            //         courseStorage.forEach(item => {
            //             state.listCourse.push(item);
            //         });
            //         callback(state.listCourse);
            //         return;
            //     }
            //     axios.get(courseDataUrl).then(data => {
            //         if (callback) {
            //             data.forEach(item => {
            //                 state.listCourse.push(item);
            //             });
            //             axios.storage(state.key, data);
            //             callback(state.listCourse);
            //         }
            //     }).catch(err => {
            //         if (error) {
            //             error(err);
            //         }
            //     });
            // });
        }
    }
}