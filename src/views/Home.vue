<template>
  <div class="home">
    <ListProfiles v-if="!profile" v-on:profileClicked="setProfile" v-bind:profiles="profiles"/>
  </div>
</template>

<style scoped>

</style>

<script>
import ListProfiles from '@/components/ListProfiles.vue'

import profileService from '../services/jeraflix_api/profile'

export default {
  name: 'Home',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      profile: this.$store.getters.profile
    }
  },
  components: {
    ListProfiles
  },
  methods: {
    loadProfiles() {
      profileService.getList({
        email: this.$store.getters.authUser.email,
        token: this.$store.getters.authUser.token
      }).then((response) => {
        this.profiles = response.data
      })
    },
    setProfile(profile) {
      this.$store.dispatch('addProfile', profile).then(() => {
        this.profile = profile
        this.$emit('setProfileNav', profile)
        this.$router.push({name: 'movies'})
      })
    }
  },
  created() {
    if (this.profiles.length == 0)
      this.loadProfiles()
  }
}
</script>
