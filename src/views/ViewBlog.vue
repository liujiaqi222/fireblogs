<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ currentBlogTitle }}</h2>
      <h4>发布日期：{{ date }}</h4>
      <img :src="currentCover" alt="" />
      <div class="post-content ql-editor" v-html="currentHTML"></div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    let currentBlog = ref(null);
    const store = useStore();
    const route = useRoute();
    let currentBlogTitle = ref(null);
    let currentHTML = ref(null);
    let date = ref(null);
    let currentCover = ref(null);
    watch(()=>store.state.postLoaded, async () => {
      if (store.state.postLoaded) {
        currentBlog.value = await store.state.blogPosts.filter((post) => {
          return post.blogId === route.params.blogId;
        });
        currentBlogTitle.value = currentBlog.value[0].blogTitle;
        date.value = new Date(currentBlog.value[0].blogDate).toLocaleString("zh-cn");
        currentHTML.value = currentBlog.value[0].blogHTML;
        currentCover.value = currentBlog.value[0].blogCoverPhoto;
      }
    },{immediate:true,deep:true});

    return { date, currentCover, currentHTML, currentBlogTitle };
  },
};
</script>

<style lang='scss' >
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}


</style>