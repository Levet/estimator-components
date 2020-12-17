import Vue from 'vue'
import Vuex from 'vuex'
// import plugin from "./plugins/newPost.plugin"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    status: "unauthenticated"
  },
  mutations: {
    successfulAuthentication(state, user){
      state.user = user;
      state.status = "authenticated";
    },
    logout(state){
      state.user = {};
      state.status = "";
    }
  },
  actions: {
    login({commit}, user){
      commit("successfulAuthentication", user)
    },
    logout({ commit }){
      console.log("Logging out...")
      commit("logout")
    }
  },
  getters: {
    isAuthenticated(state){
      console.log(state)
      return state.status === "authenticated"
    },
    user(state){
      return state.user;
    }
  }
  // plugins: [ plugin(io.socket) ]
})
