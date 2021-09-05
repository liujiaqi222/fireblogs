import { createApp } from 'vue';
import store from './store/index.js'

import App from './App.vue';
import router from './router/index.js';
import './global.css';

import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebase/firebaseInit.js";
import loading from './components/loading.vue';


const app =  createApp(App).use(router).use(store).mount('#app');;

// 监听用户是否登录
// firebase.auth().onAuthStateChanged((user) => {
//     store.commit('updateUser', user);
//     if (user) {
//         db.collection("users").doc(firebase.auth().currentUser.uid).get().then((doc) => {
//             app.use(loading);
//             app.mount('#app');
//             store.commit("setProfileInfo", doc);
//         });


//     } else {
//         app.mount('#app');

//     }
// });
