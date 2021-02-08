<template>
  <div id="app">
    <Nav v-on:logout="logout" v-bind:profile="profile" v-bind:auth="auth"></Nav>
    <router-view v-on:setProfileNav="getProfile" v-on:authenticated="setAuthenticated"/>
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
      profile: null,
      auth: this.$store.getters.status
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout').then(() => {
        this.profile = null
        this.auth = 'NO_AUTHENTICATED'
        this.$router.push({name: 'login'})
      })
    },
    getProfile(profile) {
      this.profile = profile
    },
    setAuthenticated() {
      this.auth = this.$store.getters.status
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
