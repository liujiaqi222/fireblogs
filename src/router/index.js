import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Profile from '../views/Profile.vue';
import Admin from '../views/Admin.vue';
import CreatePost from '../views/CreatePost.vue';
import BlogPreview from '../views/BlogPreview.vue';
import ViewBlog from '../views/ViewBlog.vue';
import EditBlog from '../views/EditBlog.vue';
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";


const routes = [
    { path: '/', name: 'Home', component: Home, meta: { title: '主页', requiresAuth: false } },
    { path: '/blogs', name: 'Blogs', component: Blogs, meta: { title: 'Blogs', requiresAuth: false, } },
    { path: '/login', name: 'Login', component: Login, meta: { title: '登录', requiresAuth: false, } },
    { path: '/register', name: 'Register', component: Register, meta: { title: '注册', requiresAuth: false, } },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword, meta: { title: '重置密码', requiresAuth: false, } },
    { path: '/profile', name: 'Profile', component: Profile, meta: { title: '账号设置', requiresAuth: true } },
    { path: '/admin', name: 'Admin', component: Admin, meta: { title: '管理员', requiresAuth: true, requiresAdmin: true, } },
    { path: '/create-post', name: 'CreatePost', component: CreatePost, meta: { title: '发布新文章', requiresAuth: true, requiresAdmin: true, } },
    { path: '/post-preview', name: 'BlogPreview', component: BlogPreview, meta: { title: '文章预览', requiresAuth: true, requiresAdmin: true, } },
    { path: '/view-blog/:blogId', name: 'ViewBlog', component: ViewBlog, meta: { title: '查看文章', requiresAuth: false } },
    { path: '/edit-blog/:blogId', name: 'EditBlog', component: EditBlog, meta: { title: '编辑文章', requiresAuth: true, requiresAdmin: true, } },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | FireBlogs`;
    next();
})

let admin = null;
let user = null;
firebase.auth().onAuthStateChanged((userLogin) => {
    if (userLogin) {
        user = true;
        const dataBase = db.collection("users").doc(firebase.auth().currentUser.uid);
        dataBase.get().then(doc => {
            admin = doc.data().isAdmin;
        });
    }else{
        user = false;
        admin = false;
    }
});


router.beforeEach(async (to, from, next) => {
    if (to.matched.some((res) => res.meta.requiresAuth)) {
        if (user) {
            if (to.matched.some((res) => res.meta.requiresAdmin)) {
                if (admin) {
                    return next();
                }
                return next({ name: "Home" });
            }
            return next();
        }
        return next({ name: "Home" });
    }
    next();
})
export default router;