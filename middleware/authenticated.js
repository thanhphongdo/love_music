// const FirebaseService = require('../services/firebase.service');
export default function ({ store, redirect }) {
    return true;
    // if (!process.server) {
    //     console.log("middleware from client side");
    //     return new FirebaseService.FireBaseService().auth().catch(user => {
    //         return redirect('/login');
    //     });
    // } else {
    //     return true;
    // }
}