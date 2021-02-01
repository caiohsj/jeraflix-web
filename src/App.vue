<template>
  <div id="app">
    <Nav v-on:logout="logout" v-bind:profile="profile"></Nav>
    <router-view v-on:setProfileNav="getProfile"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav
  },
  data() {
    return {
      profile: null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    },
    getProfile(profile) {
      this.profile = profile
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
