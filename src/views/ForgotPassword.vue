<template>
  <div class="reset-password">
    <modal v-if="modalActive" @close-modal="closeModal" />
    <loading v-if="loading"/>
    <div class="form-wrap">
      <form action="" class="reset">
        <h2>重置密码</h2>
        <p>忘记了密码？输入邮箱重置密码</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="邮箱" v-model="email" />
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youxiang"></use>
            </svg>
          </div>
        </div>
        <button>重置</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Modal from "../components/Modal.vue";
import Loading from '../components/Loading.vue';
export default {
  components: { Modal, Loading },
  setup() {
    let email = ref("");
    let modalActive = ref("");
    let modalMessage = ref("");
    let loading = ref('');
    function closeModal() {
      modalActive.value = false;
      email.value = "";
    }

    return { email, modalActive, modalMessage, closeModal,loading };
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