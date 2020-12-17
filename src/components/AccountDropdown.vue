<template>
  <div class="hs-unfold" v-click-outside="{ handler: 'handleClickOutside', exclude: ['accountNavbarDropdown']}" v-if="status === 'authenticated'">
    <a ref="accountNavbarDropdown" class="js-hs-unfold-invoker navbar-dropdown-account-wrapper" href="#" @click.prevent="toggleUserDetails">
      <div class="avatar avatar-sm avatar-circle">
        <img class="avatar-img" :src="user.avatar" alt="Image Description">
        <span class="avatar-status avatar-sm-status avatar-status-success"></span>
      </div>
    </a>

    <div id="accountNavbarDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account  hs-unfold-content-initialized hs-unfold-css-animation animated" :class="{'hs-unfold-hidden': !showUserDetails }" style="width: 16rem; animation-duration: 300ms;" data-hs-target-height="396.281" data-hs-unfold-content="" data-hs-unfold-content-animation-in="slideInUp" data-hs-unfold-content-animation-out="fadeOut">
      <div class="dropdown-item-text">
        <div class="media align-items-center">
          <div class="avatar avatar-sm avatar-circle mr-2">
            <img class="avatar-img" :src="user.avatar" :alt="`${user.name}'s avatar`">
          </div>
          <div class="media-body">
            <span class="card-title h5">{{ user.name  }}</span>
            <span class="card-text">{{  user.email }}</span>
          </div>
        </div>
      </div>

      <div class="dropdown-divider"></div>

      <!-- Unfold -->
      <div class="hs-unfold w-100">
        <a class="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center">
          <span class="text-truncate pr-2" title="Set status">Set status</span>
          <i class="tio-chevron-right navbar-dropdown-submenu-item-invoker ml-auto"></i>
        </a>

        <div id="navSubmenuPagesAccountDropdown1" class="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu hs-unfold-hidden hs-unfold-content-initialized hs-unfold-simple" data-hs-target-height="0" data-hs-unfold-content="">
          <a class="dropdown-item" href="#">
            <span class="legend-indicator bg-success mr-1"></span>
            <span class="text-truncate pr-2" title="Available">Available</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="legend-indicator bg-danger mr-1"></span>
            <span class="text-truncate pr-2" title="Busy">Busy</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="legend-indicator bg-warning mr-1"></span>
            <span class="text-truncate pr-2" title="Away">Away</span>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            <span class="text-truncate pr-2" title="Reset status">Reset status</span>
          </a>
        </div>
      </div>
      <!-- End Unfold -->

      <a class="dropdown-item" href="#">
        <span class="text-truncate pr-2" title="Profile &amp; account">Profile &amp; account</span>
      </a>

      <a class="dropdown-item" href="#">
        <span class="text-truncate pr-2" title="Settings">Settings</span>
      </a>

      <div class="dropdown-divider"></div>


      <a class="dropdown-item" href="#">
        <span class="text-truncate pr-2" title="Manage team">Manage team</span>
      </a>

      <div class="dropdown-divider"></div>

      <a class="dropdown-item" href="#" @click="logout">
        <span class="text-truncate pr-2" title="Sign out" >Sign out</span>
      </a>
    </div>
  </div>
</template>
<script>

  import { mapState } from "vuex";

  export default {
    data(){
      return {
        showUserDetails: false,
      }
    },
    methods: {
      logout(){
        this.$store.dispatch("logout")
        this.$router.push({path: "/Authentication"})
      },
      toggleUserDetails(){
        this.showUserDetails = !this.showUserDetails
      },
      handleClickOutside(event){
        if(this.showUserDetails){
          this.showUserDetails = false;
        }
      }
    },
    computed: {
      ...mapState(["status", "user"])
    }
  }
</script>
