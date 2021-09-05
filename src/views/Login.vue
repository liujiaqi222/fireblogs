<template>
  <div class="form-wrap">
    <form action="" class="login">
      <p class="login-register">
        还没有账号？
        <router-link class="router-link" :to="{ name: 'Register' }"
          >注册</router-link
        >
      </p>
      <h2>登录FireBlogs</h2>
      <div class="inputs">
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
        <div class="error" v-if="error">{{ errorMessage }}</div>
      </div>
      <router-link :to="{ name: 'ForgotPassword' }" class="forgot-password"
        >忘记了密码？</router-link
      >
      <button @click.prevent="signIn">登录</button>
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
export default {
  setup() {
    let password = ref("");
    let email = ref("");
    let error = ref("");
    let errorMessage = ref("");
    const router = useRouter();

    function signIn() {
      if (email.value === "" || password.value === "") {
        error.value = true;
        errorMessage.value = "请填写所有的输入框！";
        return;
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          router.push({ name: "Home" });
          setTimeout(() => {
            window.location.reload();
          }, 500);
          error.value = false;
          // console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          error.value = true;
          if (err.message === "The email address is badly formatted.") {
            return (errorMessage.value = "请输入正确的邮箱");
          }
          if (
            err.message ===
              "The password is invalid or the user does not have a password." ||
            err.message ===
              "There is no user record corresponding to this identifier. The user may have been deleted."
          ) {
            return (errorMessage.value = "密码或者账号不正确");
          }
          errorMessage.value = err.message;
        });
    }
    return { password, email, error, errorMessage, signIn };
  },
};
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 32px;
    .router-link {
      color: black;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }
    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .inputs {
      width: 100%;
      max-width: 350px;
      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus {
            outline: none;
          }
        }
        .icon {
          width: 1rem;
          position: absolute;
          left: 8px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 12px 0;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #303030;
      }
    }
    button {
      margin-top: 12px;
      width: 120px;
    }
    .angle {
      display: none;
      position: absolute;
      transform: rotate(3deg);
      background-color: #fff;
      width: 60px;
      right: -30px;
      height: 102vh;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background {
    display: none;
    flex: 2;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("/src/assets/background.png");
    @media (min-width: 900px) {
      display: block;
    }
  }
}
</style>