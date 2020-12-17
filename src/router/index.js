import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authentication from "../views/Authentication";
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estimates',
    name: 'Estimates',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Estimates.vue'),
    meta: { authenticate: true }
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.authenticate)){

    if(store.getters.isAuthenticated){
      return next()
    }

    next({
      path: "/authentication"
    })
  } else {
    next()
  }
})

export default router
