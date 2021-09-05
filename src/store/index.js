import { createStore } from 'vuex';
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";

// 创建store
const store = createStore({
    actions: {
        getCurrentUser(context) {
            const dataBase = db.collection("users").doc(firebase.auth().currentUser.uid);
            dataBase.get().then(doc => {
                context.commit("setProfileInfo", doc);
            });
        },
        async updateUserSetting(context) {
            const dataBase = db.collection('users').doc(state.profileId);
            await dataBase.update({
                name: context.state.profileName,
                userName: context.state.profileUserName
            })
        },
        async getPosts(context){
            context.state.postLoaded = false;
            const dataBase = db.collection('blogPost').orderBy('date','desc');
            const dbResults = await dataBase.get();
            dbResults.forEach(doc =>{
                if(!context.state.blogPosts.some(post=>post.blogID===doc.id)){
                    const data ={
                        blogId:doc.data().blogId,
                        blogHTML:doc.data().blogHTML,
                        blogCoverPhoto:doc.data().blogCoverPhoto,
                        blogTitle:doc.data().blogTitle,
                        blogDate:doc.data().date,
                        blogPhotoName:doc.data().blogPhotoName,
                    }

                    context.state.blogPosts.push(data);
                }
            })
            context.state.postLoaded = true;
        },
        async updatePost({commit,dispatch},payload){
            // 删掉当前post
            commit('filterBlogPost',payload);
            // 重新获取新的数据
            await dispatch('getPosts');
        },
        async deletePost({commit},payload){
            commit('filterBlogPost',payload);
            const getPost = await db.collection('blogPost').doc(payload);
            await getPost.delete();
        }
        

    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
        },
        updateUser(state, payload) {
            state.user = payload;
        },
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            state.profileName = doc.data().name;
            state.profileUserName = doc.data().userName;
            state.isAdmin = doc.data().isAdmin;
        },
        changeName(state, payload) {
            state.profileName = payload;
        },
        changeUserName(state, payload) {
            state.profileUserName = payload;
        },
        newBlogPost(state,payload){
            state.blogHTML = payload;
        },
        updateBlogTitle(state,payload){
            state.blogTitle = payload;
        },
        fileNameChange(state,payload){
            state.blogPhotoName= payload;
        },
        createFileURL(state,payload){
            state.blogPhotoFileURL = payload;
        },
        openPhotoPreview(state){
            state.blogPhotoPreview =!state.blogPhotoPreview;
        },
        filterBlogPost(state,payload){
            state.blogPosts =state.blogPosts.filter(post =>post.blogId!==payload);
        },
        setBlogState(state,payload){
            state.blogTitle = payload.blogTitle;
            state.blogHTML = payload.blogHTML;
            state.blogPhotoFileURL = payload.blogCoverPhoto;
            state.blogPhotoName =payload.blogPhotoName;
        }
    },
    state: {

        editPost: null,
        user: null,
        profileEmail: null,
        profileUserName: null,
        profileName: null,
        profileId: null,
        isAdmin: null,
        blogHTML:null,
        blogTitle:'',
        blogPhotoName:null,
        blogPhotoFileURL:null,
        blogPhotoPreview:null,
        editPost:null,
        blogPosts:[],
        postLoaded:null
    },
    getters:{
        blogPostsFeed(state){
            return state.blogPosts.slice(0,2);
        },
        blogPostsCards(state){
            return state.blogPosts.slice(2,6);
        }
    }
});

export default store;