import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBguThEHy9oGL9OjfPftMrT_4ftejQSEWA",
    authDomain: "fireblog-6aab4.firebaseapp.com",
    projectId: "fireblog-6aab4",
    storageBucket: "fireblog-6aab4.appspot.com",
    messagingSenderId: "789575169985",
    appId: "1:789575169985:web:0d6955a0449e3efb006140",
    measurementId: "G-EFZG328EP0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();