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
          <input
            type="text"
            placeholder="姓名"
            v-model="name"
            required
            maxlength="4"
          />
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#icon-xingming"></use>
          </svg>
        </div>
        <div class="input">
          <input
            type="text"
            placeholder="用户名"
            v-model.trim="userName"
            required
            maxlength="12"
          />
          <svg class="icon icon2" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
        </div>
        <div class="input">
          <input type="email" placeholder="邮箱" v-model="email" />
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxiang"></use>
          </svg>
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="密码"
            v-model="password"
            required
            maxlength="18"
          />
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-suo"></use>
          </svg>
        </div>
        <div class="input" id="checkbox">
          <input type="checkbox" v-model="isAdmin"/>
          <span> 是否申请成为管理员</span>
        </div>
        <div class="error" v-if="error">{{ errorMessage }}</div>
      </div>

      <button @click.prevent="register">注册</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";

export default {
  setup() {
    let password = ref("");
    let email = ref("");
    let userName = ref("");
    let name = ref("");
    let error = ref("");
    let errorMessage = ref("");
    let isAdmin = ref(false);
    const router = useRouter();
    async function register() {
      if (
        email.value === "" ||
        password.value === "" ||
        userName.value === "" ||
        name.value === ""
      ) {
        error.value = true;
        errorMessage.value = "请填写所有的输入框！";
        return;
      }
      error.value = false;
      const firebaseAuth = await firebase.auth();
      const createUser = await firebaseAuth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      const result = await createUser;
      console.log(result.user.uid);
      const dataBase = db.collection("users").doc(result.user.uid);
      await dataBase.set({
        name: name.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        isAdmin:isAdmin.value
      });
      router.push({ name: "Home" });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
    return { password, email, userName, name, isAdmin,error, errorMessage, register };
  },
};
</script>

<style lang='scss' scoped>
form.register .inputs .input .icon1 {
  width: 1em;
  left: 8px;
}
form.register .inputs .input .icon2 {
  width: 1.1em;
}

form.register .inputs #checkbox {
  display: flex;
  justify-content: flex-start;

  input {
    appearance: none;
    width: 60px;
    height: 20px;
    border-radius: 20px;
    background-color: #f2f7f6;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 0;
      top: 0;
      transform: scale(1.1);
      background-color: #000;
      transition: 0.3s ease;
    }

    &:checked::before {
      left: 40px;
      background-color: #999;
    }
  }
  span{
    font-size: 14px;
    color:#303030;
    font-weight: 300;
    margin-left: 15px;
  }
}

form.register h2 {
  font-size: 32px;
}
</style>