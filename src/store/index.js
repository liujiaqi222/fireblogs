import { createStore } from 'vuex'

// 创建store
const store = createStore({
    actions: {},
    mutations: {
        toggleEditPost(state,payload){
            state.editPost = payload;
        }
    },
    state: {
        sampleBlogCards: [
            {
                blogTitle: "Blog Card #1",
                blogCoverPhoto: "stock-1",
                blogDate: "2021/08/01",
            },
            {
                blogTitle: "Blog Card #2",
                blogCoverPhoto: "stock-2",
                blogDate: "2021/08/01",
            },
            {
                blogTitle: "Blog Card #3",
                blogCoverPhoto: "stock-3",
                blogDate: "2021/08/01",
            },
            {
                blogTitle: "Blog Card #4",
                blogCoverPhoto: "stock-4",
                blogDate: "2021/08/01",
            },
        ],
        editPost:null
    },
});

export default store;