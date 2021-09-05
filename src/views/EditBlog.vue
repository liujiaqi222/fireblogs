<template>
  <div class="create-post">
    <BlogCoverPreview v-show="$store.state.blogPhotoPreview" />
    <loading v-show="loading" />
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error：</span>{{ errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="输入标题名称" v-model="blogTitle" />
        <div class="upload-file">
          <label for="blog-photo">上传封面图片</label>
          <input
            type="file"
            ref="blogPhoto"
            id="blog-photo"
            @change="fileChange"
            accept=".png, .jpg, ,jpeg"
          />
          <button
            @click="openPreview"
            class="preview"
            :class="{ 'button-inactive': !$store.state.blogPhotoFileURL }"
            :to="{ name: 'BlogPreview' }"
          >
            预览图片
          </button>
          <span>选择的文件：{{ blogPhotoName }}</span>
        </div>
      </div>
      <div id="editor">
        <editor v-model:value="blogHTML"></editor>
      </div>
      <div class="blog-actions">
        <button @click="updateBlog">保存变化</button>
        <router-link class="router-button" :to="{ name: 'BlogPreview' }"
          >发布预览</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Editor from "../components/Editor.vue";
import firebase from "firebase/app";
import "firebase/storage";
import db from "../firebase/firebaseInit";
import BlogCoverPreview from "../components/BlogCoverPreview.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
import { watch } from "@vue/runtime-core";
export default {
  components: { Editor, BlogCoverPreview, Loading },
  setup() {
    let error = ref(null);
    let errorMsg = ref(null);
    let file = ref(null);
    let blogPhoto = ref(null);
    let fileName = ref(null);
    let loading = ref(null);
    const store = useStore();
    const router = useRouter();
    function fileChange() {
      file.value = blogPhoto.value.files[0];
      fileName.value = ref(file.value.name);
      store.commit("fileNameChange", fileName.value);
      // 生成本地的url
      store.commit("createFileURL", URL.createObjectURL(file.value));
    }
    function openPreview() {
      store.commit("openPhotoPreview");
    }
    const route = useRoute();
    async function updateBlog() {
      loading.value = true;
      const dataBase = db.collection("blogPost").doc(route.params.blogId);

      if (store.state.blogTitle.length !== 0 && store.state.blogHTML !== 0) {
        if (file.value) {
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(
            `documents/blogCoverPhotos/${store.state.blogPhotoName}`
          );
          docRef.put(file.value).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
              loading.value = false;
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const timestamp = Date.now();
              await dataBase.update({
                blogHTML: store.state.blogHTML,
                blogCoverPhoto: downloadURL,
                blogPhotoName: store.state.blogPhotoName,
                blogTitle: store.state.blogTitle,
                date: timestamp,
              });
              await store.dispatch("updatePost",route.params.blogId);
              loading.value = false;

              router.push({
                name: "ViewBlog",
                params: { blogId: route.params.blogId },
              });
              // 清空 标题内容
              store.state.blogTitle = "";
              store.state.blogHTML = "";
              blogPhoto.value.value = null;
            }
          );
          return;
        }
        await dataBase.update({
          blogHTML: store.state.blogHTML,
          blogTitle: store.state.blogTitle,
          date: Date.now(),
        });
        store.dispatch("updatePost", route.params.blogId);
        loading.value = false;
        router.push({
                name: "ViewBlog",
                params: { blogId: route.params.blogId },
              });
        return;
      }
      loading.value = false;
      error.value = true;
      errorMsg.value = "请确保已经填写了文章标题和文章内容！";
      setTimeout(() => {
        error.value = false;
      }, 5000);
      return;
    }

    let currentBlog = ref(null);
    watch(
      () => store.state.postLoaded,
      async () => {
        if (store.state.postLoaded) {
          currentBlog.value = await store.state.blogPosts.filter((post) => {
            return post.blogId === route.params.blogId;
          });
          store.commit("setBlogState", currentBlog.value[0]);
        }
      },
      { immediate: true, deep: true }
    );

    return {
      error,
      errorMsg,
      blogPhoto,
      fileChange,
      fileName,
      openPreview,
      updateBlog,
      loading,
    };
  },
  computed: {
    blogPhotoName() {
      return this.$store.state.blogPhotoName;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHTML: {
      get() {
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
  },
};
</script>

<style lang="scss">
.create-post {
  position: relative;
  height: 100%;
  button {
    margin-top: 0;
  }
  .router-button {
    text-decoration: none;
    color: white;
  }

  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;
    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }
  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }
  // error styling
  .invisible {
    opacity: 0 !important;
  }
  .err-message {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;
    p {
      font-size: 14px;
    }
    span {
      font-weight: 600;
    }
  }
  .blog-info {
    display: flex;
    margin-bottom: 32px;
    input:nth-child(1) {
      min-width: 300px;
    }
    input {
      transition: 0.5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid #303030;
      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #303030;
      }
    }
    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;
      input {
        display: none;
      }
      .preview {
        margin-left: 16px;
      }
      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }
  .blog-actions {
    margin-top: 32px;
    button {
      margin-right: 60px;
    }
  }
}
</style>
