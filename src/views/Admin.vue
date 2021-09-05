  <template>
  <modal
    v-if="modalActive"
    :modalMessage="modalMessage"
    @close-modal="closeModal"
  />
  <loading v-if="loading" />
  <div class="admin">
    <div class="container">
      <div class="admin-info">
        <h2>添加管理员</h2>
        <div class="input">
          <input
            placeholder="输入要被设置为管理员的用户邮箱"
            type="text"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ functionMsg }}</span>
        <button @click="addAdmin" class="button">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import db from "../firebase/firebaseInit.js";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";

import "firebase/auth";
export default {
  components: { Modal, Loading },
  setup() {
    let adminEmail = ref("");
    let functionMsg = ref("");
    let loading = ref(false);
    let modalActive = ref(false);
    let modalMessage = ref("");
    function addAdmin() {
      db.collection("users")
        .where("email", "==", adminEmail.value)
        .get()
        .then(
          (data) => {
            let doc = data.docs[0];
            if (doc.data().isAdmin === true) {
              functionMsg.value = "用户已经是管理员";
              return new Promise(()=>{}) ;
            } else {
              loading.value = true;
              return doc.id;
            }
          },
          (err) => {
            functionMsg.value = "无法查询到该用户！";
          }
        )
        .then((uid) => {
          db.collection("users").doc(uid).update({
            isAdmin: true,
          });
        }).then(()=>{
            loading.value = false;
            modalActive.value = true;
            modalMessage.value = `已经成功将邮箱${adminEmail.value}为管理员!`
        });
    }
    function closeModal(){
        modalActive.value = false;
    }
    return {
      adminEmail,
      functionMsg,
      addAdmin,
      loading,
      modalActive,
      modalMessage,
      closeModal
    };
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;
    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }
    .admin-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;
      text-align: center;
      span {
        font-size: 14px;
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

          @media (min-width: 900px) {
          }
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