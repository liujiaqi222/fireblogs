<template>
  <div class="form-wrap">
    <form action="" class="register">
      <p class="login-register">
        已经有账号了？
        <router-link class="router-link" :to="{ name: 'Login' }"
          >登录</router-link
        >
      </p>
      <h2>创建FireBlogs账号</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="姓名" v-model="name" />
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#icon-xingming"></use>
          </svg>
        </div>
        <div class="input">
          <input type="text" placeholder="用户名" v-model="userName" />
          <svg class="icon icon2" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
        </div>
        <div class="input">
          <input type="text" placeholder="邮箱" v-model="email" />
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxiang"></use>
          </svg>
        </div>
        <div class="input">
          <input type="password" placeholder="密码" v-model="password" />
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-suo"></use>
          </svg>
        </div>
      </div>

      <button>注册</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let password = ref("");
    let email = ref("");
    let userName = ref("");
    let name = ref("");
    return { password, email, userName, name };
  },
};
</script>

<style lang='scss' scoped>
form.register .inputs .input .icon1 {
  width: 1em;
  left: 8px;
}
form.register .inputs .input .icon2 {
  width: 1.5em;
}

form.register h2 {
  font-size: 32px;
}
</style>