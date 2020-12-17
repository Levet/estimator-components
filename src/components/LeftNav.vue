<template>
  <aside class="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered navbar-dark navbar-vertical-aside-initialized">
    <div class="navbar-vertical-container">
      <div class="navbar-vertical-footer-offset">
        <div style="height: 150px" class="navbar-brand-wrapper justify-content-between">
          <a class="navbar-brand" href="./index.html" aria-label="Front" style="margin: 0 auto">
            <img class="navbar-brand-logo" src="../../public/img/coltLogo.png" alt="Logo">
            <img class="navbar-brand-logo-mini" src="../../public/svg/logos/logo-short.svg" alt="Logo">
          </a>
        </div>

        <!-- Content -->
        <div class="navbar-vertical-content">

          <ul class="navbar-nav navbar-nav-lg nav-tabs">
            <li class="nav-item" v-for="category of menu.items" :class="{ 'active': isActiveRoute(category.name) }">
              <router-link :to="category.destination" class=" nav-link" :title="category.name" :class="{ 'active': isActiveRoute(category.name) }">
                <i class="nav-icon" :class="category.icon"></i>
                <span class="text-truncate">{{category.name}}</span>
              </router-link>
<!--              <a class=" nav-link nav-link-toggle" :title="category.name">-->
<!--                <i class="nav-icon" :class="category.icon"></i>-->
<!--                <span class="text-truncate">{{category.name}}</span>-->
<!--              </a>-->
<!--              <ul class="js-navbar-vertical-aside-submenu nav nav-sub" style="display: block;" v-if="category.items">-->
<!--                <li class="nav-item" v-for="item of category.items">-->
<!--                  <a class="nav-link active" href="./index.html" :title="category.name">-->
<!--                    <span class="tio-circle nav-indicator-icon"></span>-->
<!--                    <span class="text-truncate">{{item.name}}</span>-->
<!--                  </a>-->
<!--                </li>-->
<!--              </ul>-->
            </li>
          </ul>

<!--          <template v-for="section of menu.sections">-->
<!--            <li class="nav-item">-->
<!--              <small class="nav-subtitle" :title="section.name">{{section.name}}</small>-->
<!--              <small class="tio-more-horizontal nav-subtitle-replacer"></small>-->
<!--            </li>-->
<!--            <li class="navbar-vertical-aside-has-menu " v-for="category of section.items">-->
<!--              <a class="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle " :title="category.name">-->
<!--                <i class="tio-pages-outlined nav-icon"></i>-->
<!--                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">{{category.name}}</span>-->
<!--              </a>-->

<!--              <ul class="js-navbar-vertical-aside-submenu nav nav-sub">-->
<!--                <li class="navbar-vertical-aside-has-menu " v-for="type of category.items">-->
<!--                  <a class="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:;"-->
<!--                     :title="type.name">-->
<!--                    <span class="tio-circle nav-indicator-icon"></span>-->
<!--                    <span class="text-truncate">{{type.name}}</span>-->
<!--                  </a>-->
<!--                  <ul class="js-navbar-vertical-aside-submenu nav nav-sub">-->
<!--                    <li class="nav-item" v-for="item of type.items">-->
<!--                      <a class="nav-link " href="./users.html" :title="item.name">-->
<!--                        <span class="tio-circle-outlined nav-indicator-icon"></span>-->
<!--                        <span class="text-truncate">{{item.name}}</span>-->
<!--                      </a>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </template>-->
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
  export default {
    data(){
      return {
        menu: {
          items: [
            {
              name: "Home",
              icon: "tio-home-vs-1-outlined",
              destination: "/"
              // items: [
              //   {name: "Default", path: "/Default"}
              // ]
            },
            {
              name: "Estimates",
              icon: "tio-pages-outlined",
              destination: "estimates"
            },
            {
              name: "Authentication",
              icon: "tio-lock-outlined",
              destination: "authentication"
            }
          ],
          // sections: [
          //   {
          //     name: "Pages",
          //     items: [
          //       {
          //         name: "Pages",
          //         path: "#",
          //         items: [
          //           {name: "Users", path: "/Users"}
          //         ]
          //       }
          //     ]
          //   }
          // ]
        }
      }
    },
		methods: {
    	isActiveRoute(currentRoute){
    		return this.$route.name === currentRoute
			}
		}
  }
</script>
