import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';


const routes = [
    { path: '/', name: 'Home',component: Home, meta: { title: '主页' } },
    { path: '/blogs', name: 'Blogs', component: Blogs, meta: { title: 'Blogs' } },
    { path: '/login', name: 'Login', component: Login, meta: { title: '登录' } },
    { path: '/register', name: 'Register', component: Register, meta: { title: '注册' } },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword, meta: { title: '忘记密码' } },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | FireBlogs`;
    next();
})

export default router;