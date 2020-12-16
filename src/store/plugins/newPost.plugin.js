export default function plugin(socket){
  return store => {

    socket.on("newPost", (data, res) => {
      store.commit("addPostToList", data)
    })

    store.dispatch("getPosts");
  }
}
