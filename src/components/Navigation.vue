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
          <router-link class="link" to="#">发文章</router-link>
          <router-link class="link"  :to="{ name: 'Login' }" >登录/注册</router-link>
        </ul>
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
          :class="{active: $route.path === '/'? true : false  }"
          >首页</router-link
        >
        <router-link
          class="link"
          :to="{ name: 'Blogs' }"
          :class="{ active: $route.path == '/blogs' ? true : false }"
          >博客</router-link
        >
        <router-link class="link" to="#" >发文章</router-link>
        <router-link class="link" :to="{ name: 'Login' }">登录/注册</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
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
    return { mobile, mobileNav, myMask, toggleMobileNav };
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

header .container .active, header .mobile-nav .active {
  color:rgb(248, 96, 79);
  font-weight:600;
}
</style>