<template>
  <div id="app">
    <Nav v-on:logout="logout"></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
