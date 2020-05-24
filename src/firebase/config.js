import * as firebase from "firebase/app"
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCxoTT36ta1pwexTVKrXZlEqgMn1g8qa-Q",
    authDomain: "ludmil-b76f5.firebaseapp.com",
    databaseURL: "https://ludmil-b76f5.firebaseio.com",
    projectId: "ludmil-b76f5",
    storageBucket: "ludmil-b76f5.appspot.com",
    messagingSenderId: "735209947868",
    appId: "1:735209947868:web:bd2179e86c53638e9daa19",
    measurementId: "G-2ZGRQ70NJG"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()
export const database = firebase.database()

