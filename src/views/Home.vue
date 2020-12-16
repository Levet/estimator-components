<template>
  <div>
    <breadcrumbs :crumbs="crumbs"></breadcrumbs>
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
