<template>
  <div class="blog-wrapper " :class="{'no-user':!$store.state.user}">
    <div class="blog-content">
      <div>
        <!-- 判断是否为欢迎帖子 -->
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.blogTitle }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <!-- <p v-else class="content-preivew" v-html="post.blogHTML.slice(0,100)"></p> -->
        <router-link v-if="post.welcomeScreen" class="link link-light" to="#">
          <i class="fas fa-arrow-right arrow-light arrow"></i>登录/注册
        </router-link>
        <router-link v-else class="link test2" :to="`/view-blog/${post.blogId}`" >
          <i class="fas fa-arrow-right arrow"></i>查看帖子
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" :src="getImageUrl(post.photo)" alt="" />
      <img v-else :src="post.blogCoverPhoto" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  setup(props) {
    function getImageUrl(name) {
      return new URL(`../assets/blogPhotos/${name}.jpg`, import.meta.url).href;
    }
    return { getImageUrl };
  },
};
</script>

<style lang='scss' scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    max-height: 650px;
    min-height: 600px;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex:3;
    }
    div {
      max-width: 375px;
      padding: 72px 24px;
    }
    h2 {
      font-size: 32px;
      font-weight: 300;
      text-transform: uppercase;
      margin-bottom: 24px;
      @media (min-width: 700px) {
        font-size: 40px;
      }
    }
    p {
      font-size: 15px;
      font-weight: 300;
      line-height: 1.7;
    }
    .content-preivew {
      font-size: 13px;
      height: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100px;
    }
    .link {
      display: inline-flex;
      align-items: center;
      margin-top: 32px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;
      border-bottom: 1px solid transparent;
      &:hover {
        border-bottom-color: #303030;
      }
    }

    .link-light {
      &:hover {
        border-bottom-color: #ffff;
      }
    }
  }
  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      flex: 4;
    }
    img{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:nth-child(even){
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}
.no-user:first-child {
  .blog-content {
    background-color: #303030;
    color: #fff;
  }
}
</style>