<template>
  <div>
    <breadcrumbs :crumbs="crumbs"></breadcrumbs>
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  components: { Breadcrumbs },
  name: 'Home',
  data(){
    return {
      crumbs: [
        { name: "Home", destination: "/" },
      ]
    }
  }
}
</script>
