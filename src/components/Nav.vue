<template>
    <div>
      <div id="nav">
        <router-link to="/home" class="logo">
          <img :src="logo" alt="" >
        </router-link>
        <div class="nav-profile" v-if="profile">
          <img src="../assets/default-user-icon.jpg" alt="">
          <h2 v-if="profile">{{ profile.name }}</h2>
        </div>
        <ul class="main-menu">
          <li v-if="auth == 'AUTHENTICATED'">
            <a v-on:click.prevent="logout" to="/">Logout</a>
          </li>
          <li>
            <router-link v-if="auth == 'NO_AUTHENTICATED'" to="/login">Login</router-link>
          </li>
        </ul>
        <FontAwesomeIcon icon="bars" class="btn-mobile-menu" v-on:click="toggleMenuMobile"/>
      </div>
      <ul class="mobile-menu">
        <li v-if="auth == 'AUTHENTICATED'">
          <a v-on:click.prevent="logout" to="/">Logout</a>
        </li>
        <li>
          <router-link v-if="auth == 'NO_AUTHENTICATED'" to="/login">Login</router-link>
        </li>
      </ul>
    </div>
</template>

<style scoped>
#nav {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  background: #040404;
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 1;
}

#nav h2 {
  color: #0DB551;
}

.main-menu, .mobile-menu {
  list-style-type: none;
  display: flex;
}

.main-menu {
  justify-content: center;
  align-items: center;
}

.mobile-menu {
  background: #040404;
  border-top: 1px solid #ffffff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  transition: all 1s;
  display: none;
}

ul li {
  margin: 10px;
}

a {
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
}

#nav .logo {
  width: 120px;
  display: flex;
}

#nav a.router-link-exact-active {
  color:#0DB551;
}

.nav-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.btn-mobile-menu {
  color: #ffffff;
  margin: auto 15px;
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .btn-mobile-menu {
    display: block;
  }

  .main-menu {
    display: none;
  }
}
</style>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

export default {
    name: 'Nav',
    components: {
      FontAwesomeIcon
    },
    data() {
        return {
            logo: require('../assets/logo.svg'),
            authUser: this.$store.getters.authUser,
            showMenuMobile: false
        }
    },
    methods: {
      logout() {
        this.$emit('logout')
      },
      toggleMenuMobile() {
        let elMenu = document.querySelector('.mobile-menu')
        if(this.showMenuMobile) {
          elMenu.style.display = 'none'
          this.showMenuMobile = false
        } else {
          elMenu.style.display = 'flex'
          this.showMenuMobile = true
        }
      }
    },
    props: [
      'profile',
      'auth'
    ],
}
</script>