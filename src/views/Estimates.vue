<template>
  <div class="estimates">
    <breadcrumbs :crumbs="crumbs"></breadcrumbs>
    <h1>Estimates</h1>
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
        { name: "Estimates", destination: "/Estimates", active: true }
      ]
    }
  }
}
</script>
