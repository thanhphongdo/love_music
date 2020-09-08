const firebase = require('firebase');
const app = firebase.initializeApp({
    apiKey: "AIzaSyCep-YCF4TtSGi0CUojp6dkqEdav4s03ys",
    authDomain: "engstudyapp.firebaseapp.com",
    databaseURL: "https://engstudyapp.firebaseio.com",
    projectId: "engstudyapp",
    storageBucket: "engstudyapp.appspot.com",
    messagingSenderId: "837405370229",
    appId: "1:837405370229:web:456a55581bab168c6a153c",
    measurementId: "G-9HDCTPCYSK"
});

export class FireBaseService {
    constructor() {
        this.db = app.database();
        this.firestore = app.firestore();
        this.firebase = firebase;
        window.testDB = this;
    }
    toJSONObject(fObj) {
        if (fObj) {
            let obj = fObj.data();
            obj.id = fObj.id;
            return fObj;
        }
        return null;
    }
    fromJSONObject(obj) {
        return Parse.Object.fromJSON(obj);
    }
    toJSONArray(pObjs) {
        let self = this;
        if (pObjs && pObjs.length) {
            return pObjs.map(pObj => {
                return self.toJSONObject(pObj);
            });
        }
        return null;
    }
    fromJSONArray(objs) {
        if (objs && objs.length) {
            return objs.map(obj => {
                return Parse.Object.fromJSON(obj);
            });
        }
        return null;
    }
    storageParseObject(key, obj) {
        return localForage.db.setItem(key, this.toJSONObject(obj));
    }
    storageParseArray(key, objs) {
        return localForage.db.setItem(key, this.toJSONArray(objs));
    }
    restoreParseObject(key) {
        return localForage.db.getItem(key);
    }
    restoreParseArray(key) {
        let self = this;
        return localForage.db.getItem(key).then(data => {
            return self.fromJSONArray(data);
        });
    }
    storage(key, obj) {
        return localForage.db.setItem(key, obj);
    }
    restore(key) {
        return localForage.db.getItem(key);
    }
    auth() {
        return new Promise((res, rej) => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    res(user);
                }
                rej();
            });
        })
    }
    signUp(email, password) {
        return this.firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    signIn(email, password) {
        return this.firebase.auth().signInWithEmailAndPassword(email, password);
    }
    signOut() {
        return this.firebase.auth().signOut();
    }
    getCurrentUser() {
        return this.firebase.auth().currentUser;
    }
    colectionRef(colectionName) {
        return this.firestore.collection(colectionName);
    }
    getAllDocs(colectionName, orderBy, page, perPage) {
        return this.firestore.collection(colectionName).orderBy(orderBy).startAt(page * perPage).endAt((page + 1) * perPage - 1).get();
    }
    getAllDocsByRef(colectionRef, orderBy, page, perPage) {
        return colectionRef.orderBy(orderBy).startAt(page * perPage).endAt((page + 1) * perPage - 1).get();
    }
    addDoc(colectionName, docs) {
        return this.firestore.collection(colectionName).add(docs);
    }
    updateDoc(colectionName, docId, docs) {
        return this.firestore.collection(colectionName).doc(docId).update(docs);
    }
}