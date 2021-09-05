<template>
  <header>
    <nav class="container">
      <!-- 左上角的头像 -->
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >FireBlogs</router-link
        >
      </div>
      <!-- 导航链接 -->
      <div class="nav-links" v-show="!mobile">
        <ul>
          <router-link
            class="link"
            :to="{ name: 'Home' }"
            :class="{ active: $route.path === '/' ? true : false }"
            >首页</router-link
          >
          <router-link
            class="link"
            :to="{ name: 'Blogs' }"
            :class="{ active: $route.path == '/blogs' ? true : false }"
            >博客</router-link
          >
          <router-link class="link" :to="{ name: 'CreatePost' }" :class="{ active: $route.path == '/CreatePost' ? true : false }" v-if="$store.state.isAdmin">发文章</router-link>
          <router-link class="link" :to="{ name: 'Login' }" v-if='!$store.state.user'
            >登录/注册</router-link
          >
        </ul>
        <div class="profile" ref="profile" @click="toggleProfileMenu" v-if='$store.state.user'>
          <span style='font-size:8px'>{{ $store.state.profileName }}</span>
          <div class="profile-menu" v-show="profileMenu">
            <div class="info">
              <p class="name">{{ $store.state.profileName }}</p>
              <div class="right">
                <p>{{ $store.state.profileUserName }}</p>
                <p>{{ $store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link :to="{name:'Profile'}" class="option">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-Serviceusers"></use>
                  </svg>
                  <p>账号设置</p>
                </router-link>
              </div>
              <div class="option" v-if="$store.state.isAdmin">
                <router-link :to="{name:'Admin'}" class="option">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-admin"></use>
                  </svg>
                  <p>管理员主页</p>
                </router-link>
              </div>
              <div class="option" @click="signOut">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-log-out"></use>
                  </svg>
                  <p>退出登录</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- 菜单图标 -->
    <i class="fas fa-bars" v-show="mobile" @click="toggleMobileNav"></i>
    <div v-show="mobileNav" id="mask" @click="mobileNav = false"></div>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link
          class="link"
          :to="{ name: 'Home' }"
          :class="{ active: $route.path === '/' ? true : false }"
          >首页</router-link
        >
        <router-link
          class="link"
          :to="{ name: 'Blogs' }"
          :class="{ active: $route.path == '/blogs' ? true : false }"
          >博客</router-link
        >
        <router-link class="link" to="#" v-if="$store.state.isAdmin"  :class="{ active: $route.path == '/CreatePost' ? true : false }">发文章</router-link>
        <router-link class="link" :to="{ name: 'Login' }" v-if='!$store.state.user'
          >登录/注册</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import { onMounted, ref,computed } from "vue";
import { useRoute } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  setup() {
    const route = useRoute();
    let mobile = ref(null);
    let mobileNav = ref(null);
    let myMask = ref(null);
    onMounted(() => {});
    // 检测屏幕尺寸
    function checkSreen() {
      if (window.innerWidth <= 768) {
        mobile.value = true;
        return;
      }
      // 不是手机则不显示菜单按钮
      mobile.value = false;
      mobileNav.value = false;
    }
    window.addEventListener("resize", checkSreen);
    // 一开始就要检查一次屏幕大小
    checkSreen();
    function toggleMobileNav() {
      mobileNav.value = !mobileNav.value;
    }

    let profileMenu = ref(null);
    let profile = ref(null);
    function toggleProfileMenu(e){
      if(e.target === profile.value){
        profileMenu.value =!profileMenu.value;
      }
    }

    function signOut(){
      firebase.auth().signOut();
      window.location.reload();
    }
    return { mobile, mobileNav, myMask, toggleMobileNav,profileMenu ,toggleProfileMenu,profile,signOut};
  },
};
</script>

<style lang='scss' scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.1),
    0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
    .branding {
      display: flex;
      align-items: center;
      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      ul {
        .link {
          margin-right: 32px;
        }
      }
      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;
        span{
          pointer-events: none;
        }
      }
      .profile-menu {
        position: absolute;
        top: 60px;
        z-index: 888;
        right: 0;
        width: 250px;
        background-color: #303030;
        box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.1),
          0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
        .info {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #fff;
          .name {
            position: initial;
            width: 40px;
            height: 40px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            color: #303030;
          }
          .right {
            flex: 1;
            margin-left: 24px;
            p:nth-child(1) {
              font-size: 14px;
            }
          }
        }
        .options {
          padding: 15px;
          .option {
            text-decoration: none;
            color: white;
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            .icon {
              width: 18px;
              height: 18px;
              fill: white;
            }
            p {
              font-size: 14px;
              margin-left: 12px;
            }
          }
          .option:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .fa-bars {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 25px;
    font-size: 20px;
  }
}
#mobileNav-mask {
  display: flex;
}
#mask {
  position: fixed;
  z-index: 888;
  width: 100%;
  height: 800px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: transparent;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
  z-index: 1000;
  .link {
    padding: 15px;
    color: white;
  }
  transition: all 0.4s ease;
}

// 设置过渡
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to,
.mobile-nav-leave-from {
  transform: translateX(0);
}

header .container .active,
header .mobile-nav .active {
  color: rgb(248, 96, 79);
  font-weight: 600;
}
</style>