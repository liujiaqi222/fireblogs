<template>
  <div class="reset-password">
    <modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <loading v-if="loading" />
    <div class="form-wrap">
      <form action="" class="reset">
        <p class="login-register">
          已经有账号了？
          <router-link class="router-link" :to="{ name: 'Login' }"
            >登录</router-link
          >
        </p>
        <h2>重置密码</h2>
        <p>请输入邮箱来重置密码</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="邮箱" v-model="email" />
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youxiang"></use>
            </svg>
          </div>
        </div>
        <button @click.prevent="resetPassword">重置</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: { Modal, Loading },
  setup() {
    let email = ref("");
    let modalActive = ref("");
    let modalMessage = ref("");
    let loading = ref("");
    function resetPassword() {
      loading.value = true;

      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then(() => {
          modalMessage.value = "如果您的账号已注册，您将收到一封邮件";
          loading.value = false;
          modalActive.value = true;
        })
        .catch((err) => {
          modalMessage.value = err.message;
          loading.value = false;
          modalActive.value = true;
        });
    }
    function closeModal() {
      modalActive.value = !modalActive.value;
      email.value = "";
    }

    return {
      email,
      modalActive,
      modalMessage,
      closeModal,
      loading,
      resetPassword,
    };
  },
};
</script>

<style lang='scss' scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 10px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>