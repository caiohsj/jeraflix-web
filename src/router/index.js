import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      authRequired: false
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const status = store.getters.status
  const authRequired = to.meta.authRequired
  
  if(!authRequired) {
    return next()
  }else if (status == 'AUTHENTICATED') {
    return next()
  } else {
    next('/login')
  }

})

export default router
