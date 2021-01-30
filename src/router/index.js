import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ProfileCreate from '../views/ProfileCreate.vue'
import Movie from '../views/Movie'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      authRequired: false
    }
  },
  {
    path: '/profile',
    name: 'profile.create',
    component: ProfileCreate,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Movie,
    meta: {
      authRequired: true
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
  } else if(to.name == 'Login') {
    next('/login')
  }

})

export default router
