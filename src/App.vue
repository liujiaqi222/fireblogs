<template>
  <div class="app">
    <navigation v-if="!navigationDisabled"></navigation>
    <router-view></router-view>
    <my-footer v-if="!navigationDisabled"></my-footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import MyFooter from "./components/Footer.vue";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: { Navigation, MyFooter },
  setup() {
    let navigationDisabled = ref(null);
    const route = useRoute();
    const store = useStore();
    function checkRoute() {
      if (
        route.name === "Login" ||
        route.name === "Register" ||
        route.name === "ForgotPassword"
      ) {
        return (navigationDisabled.value = true);
      }
      navigationDisabled.value = false;
    }

    onMounted(() => {
      checkRoute(); // 当页面加载完毕时 才能读取出route.name
    });

    firebase.auth().onAuthStateChanged((user) => {
      // 获取post
      store.commit("updateUser", user);
      store.dispatch("getPosts");
      if (user) {
        store.dispatch("getCurrentUser");
      }
    });

    // 实时监控route的变化
    watch(route, () => {
      checkRoute();
    });
    return { navigationDisabled };
  },
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  color: #555;
  margin-right: 15px;
  margin-left: 5px;
  transition: transform 0.2s ease;
}

.arrow:hover {
  transform: translateX(5px);
}

.arrow-light {
  color: white;
}

button,
.router-button {
  transition: 0.5s ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  color: white;
  background-color: #303030;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }
  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  color: #fff;
  border: 2px solid white;
  color: white;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>