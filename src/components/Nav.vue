<template>
    <div id="nav">
        <img :src="logo" alt="" class="logo">
        <p>flix</p>
        <ul>
          <li v-if="auth == 'AUTHENTICATED'">
            <router-link to="/home">Home</router-link>
          </li>
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
}

#nav a.router-link-exact-active {
  color:#00b894;
}
</style>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            logo: require('../assets/logo.svg'),
            auth: this.$store.getters.status,
            authUser: this.$store.getters.authUser
        }
    },
    methods: {
      logout() {
        this.$emit('logout')
      }
    }
}
</script>