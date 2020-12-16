import Vue from 'vue'
import Vuex from 'vuex'
import plugin from "./plugins/newPost.plugin"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    addPostToList(state, post){
      state.posts.push(post);
    },
    setPosts(state, posts){
      console.log(posts)
      state.posts = posts;
    }
  },
  actions: {
    getPosts(state){
      io.socket.get("/posts", body => {
        state.commit("setPosts", body)
      })
    }
  },
  plugins: [ plugin(io.socket) ]
})
