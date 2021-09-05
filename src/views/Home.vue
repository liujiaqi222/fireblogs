<template>
  <div class="home">
    <blog-post :post="welcomeScreen"  v-if='!$store.state.user'/>
    <blog-post
      v-for="(post, index) in blogPostsFeed"
      :post="post"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>查看更多最近发布的文章</h3>
        <div class="blog-cards">
          <blog-card
            :post="post"
            v-for="(post, index) in blogPostsCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates" v-if='!$store.state.user'>
      <div class="container">
        <h2>再也不错过任何一篇文章。 今天就免费注册一个账号！</h2>
        <router-link class="router-button" to="#">
          注册FireBlogs的账号
          <i class="icon fas fa-arrow-right arrow arrow-light"></i>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";

export default {
  components: { BlogPost, BlogCard },
  setup() {
    const store = useStore();
    let welcomeScreen = reactive({
      title: "Welcome!",
      blogPost:
        "每周更新关于编程的博客，包括HTML、CSS、JavaScript甚至更多。今天注册，永远不错过最新的帖子。",
      welcomeScreen: true,
      photo: "coding",
    });
    let blogPostsFeed = computed(()=>store.getters.blogPostsFeed)
    let blogPostsCards = computed(() => store.getters.blogPostsCards);
    
    return {
      welcomeScreen,
      blogPostsCards,
      blogPostsFeed
    };
  },
};
</script>

<style lang='scss' scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    flex-direction: column;
    align-items: center;
    display: flex;
    @media (min-width: 800px) {
      padding: 125px 100px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 20px;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
      i.icon{
        margin-left: 14px;

      }
    }
    h2 {
      font-weight: 300;
      font-size: 30px;
      max-width: 390px;
      width: 100%;
      text-align: center;
      @media (min-width: 800px) {
        text-align: initial;
      }
    }
  }
}
</style>