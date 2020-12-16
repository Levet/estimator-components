<template>
  <div class="about">
    <breadcrumbs :crumbs="crumbs"></breadcrumbs>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs";

export default {
  components: { Breadcrumbs },
  data(){
    return {
      crumbs: [
        { name: "Home", destination: "/" },
        { name: "About", destination: "/About", active: true }
      ]
    }
  }
}
</script>
