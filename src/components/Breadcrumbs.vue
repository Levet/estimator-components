<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-no-gutter">
      <li class="breadcrumb-item" v-for="(crumb, index) of crumbs" :class="{ active: crumbs.length - 1 === index }">
        <template v-if="crumbs.length - 1 === index">
          {{crumb.name}}
        </template>
        <template v-else>
          <router-link class="breadcrumb-link" :to="crumb.destination">{{crumb.name}}</router-link>
        </template>

      </li>
    </ol>
  </nav>
</template>
<script>
  export default {
    props: {
      crumbs: {
        default(){
          return [
            { name: "Home", destination: "/" },
            { name: "About", destination: "/About" }
          ]
        }
      }
    }
  }
</script>
