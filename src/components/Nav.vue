<template>
    <div id="nav">
        <router-link to="/home" class="logo">
          <img :src="logo" alt="" >
        </router-link>
        <div class="nav-profile" v-if="profile">
          <img src="../assets/default-user-icon.jpg" alt="">
          <h2 v-if="profile">{{ profile.name }}</h2>
        </div>
        <ul>
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

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li {
  margin: 10px;
}

#nav a {
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
</style>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            logo: require('../assets/logo.svg'),
            authUser: this.$store.getters.authUser
        }
    },
    methods: {
      logout() {
        this.$emit('logout')
      }
    },
    props: [
      'profile',
      'auth'
    ],
}
</script>