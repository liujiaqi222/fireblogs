<template>
  <modal
    v-if="modalActive"
    :modalMessage="modalMessage"
    v-on:close-modal="closeModal"
  />
  <div class="profile">
    <div class="container">
      <h2>账号设置</h2>
      <div class="profile-info">
        <div class="name">{{ $store.state.profileName }}</div>
        <div class="admin-badge">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-admin"></use>
          </svg>
          <span>管理员</span>
        </div>

        <div class="input">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="name" max="4"/>
        </div>
        <div class="input">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="userName" max="8"/>
        </div>
        <div class="input">
          <label for="email">邮箱</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">保存修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  setup() {
    let modalMessage = ref("修改已经被保存！");
    let modalActive = ref(null);
    function closeModal() {
      modalActive.value = false;
    }

    const store = useStore();
    let name = computed({
      get() {
        return store.state.profileName;
      },
      set(payload) {
        store.commit("changeName", payload);
      },
    });
    let userName = computed({
      get() {
        return store.state.profileUserName;
      },
      set(payload) {
        store.commit("changeUserName", payload);
      },
    });
    let email = computed({
      get() {
        return store.state.profileEmail;
      },
    });

    function updateProfile() {
      modalActive.value = true;
      store.dispatch("updateUserSetting");

    }
    return {
      modalMessage,
      modalActive,
      closeModal,
      name,
      userName,
      email,
      updateProfile,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;
    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }
    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.1),
        0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;
      padding: 32px;
      .name {
        position: initial;
        width: 80px;
        height: 80px;
        background-color: #303030;
        color: white;
        display: flex;
        font-size: 18px;
        align-self: center;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .admin-badge {
        display: flex;
        align-self: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 24px;
        border-radius: 8px;
        background-color: #303030;
        margin: 16px 0;
        align-items: center;
        text-align: center;
        .icon {
          width: 14px;
          height: 14px;
          fill: white;
          margin-right: 5px;
        }
      }
      .input {
        margin: 16px 0;
        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          &:focus {
            outline: none;
          }
        }
      }
      button {
        align-self: center;
      }
    }
  }
}
</style>