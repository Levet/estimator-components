<template>
  <div id="app" class="footer-offset footer-offset" :class="{'has-navbar-vertical-aside navbar-vertical-aside-show-xl': $router.currentRoute.name !== 'Authentication' }">
    <top-bar v-if="$router.currentRoute.name !== 'Authentication'"></top-bar>
    <left-nav v-if="$router.currentRoute.name !== 'Authentication'"></left-nav>
    <main id="content" role="main" class="main pointer-event">
      <div class="content container-fluid">
        <router-view></router-view>
      </div>
    </main>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
  </div>
</template>
<script>
import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";
import Vuex from "vuex";

export default {
  components: { LeftNav, TopBar },
  data(){
    return {

      newPost: {
        title: "",
        body: "",
        state: "CREATING",
        author: "",
        categories: []
      },
      posts: []
    }
  },
  methods: {
    createPost(){

      const self = this;
      self.newPost.state = "PENDING"

      // io.socket.on("newPost", async (data) => {
      //   if(data.title === self.newPost.title){
      //     self.newPost.state = "CREATED"
      //   }
      //
      //   const author = await new Promise((resolve) => io.socket.get("/authors/find", {
      //     first_name: "John", last_name: "Doe"
      //   }, resolve));
      //
      //   console.log("THE AUTHOR< AND THE POSTS!", author)
      // });
      //
      // console.log(self.newPost)
      //
      // io.socket.get("/posts/create", self.newPost, console.log)
    }
  },
  async created(){

    // io.socket.on("newAuthor", (data) => {
    //   this.newPost.author = data.id
    //
    //   console.log("Author", this.newPost.author)
    // })
    //
    //
    // await io.socket.get("/authors/create", { first_name: "John", last_name: "Doe" });
    //
    // const cat1 = await new Promise((resolve) => io.socket.get("/categories/create", { name: "Category1" }, resolve))
    // const cat2 = await new Promise((resolve) => io.socket.get("/categories/create", { name: "Category2" }, resolve))
    //
    // this.newPost.categories = [ cat1.category.id, cat2.category.id ];

  },
  computed: {
    isAuthentication(){
      return this.$router.currentRoute.name === "Authentication"
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
