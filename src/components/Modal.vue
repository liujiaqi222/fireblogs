<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["modalMessage"],
  emits: ["close-modal"],
  setup(props, context) {
    function closeModal() {
      context.emit("close-modal");
    }
    let height = ref(document.body.clientHeight);
    let modal = ref(null);
    onMounted(() => {
      modal.value.style.height = height.value;
    });
    return { closeModal, modal };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;


    p {
      font-weight: 300;
      line-height: 1.8;
    }

    button {
      align-self: center;
    }
  }
}
</style>