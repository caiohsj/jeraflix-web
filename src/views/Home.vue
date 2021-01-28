<template>
  <div class="home">
    <DialogForUserWithoutProfile v-bind:profiles="profiles"/>
    <h1>Popular Movies</h1>
    <ListMovies v-bind:movies="moviesPopular"/>
    <h1>Top Rated Movies</h1>
    <ListMovies v-bind:movies="moviesTopRated"/>
    <h1>Top Upcoming</h1>
    <ListMovies v-bind:movies="moviesUpcoming"/>
  </div>
</template>

<style scoped>
h1 {
    text-align: center;
}
</style>

<script>
import ListMovies from '@/components/ListMovies.vue'
import DialogForUserWithoutProfile from '@/components/DialogForUserWithoutProfile'

import movieService from '../services/themoviedb/movie/movie'
import profileService from '../services/jeraflix_api/profile/profile'

export default {
  name: 'Home',
  data() {
    return {
      moviesPopular: [],
      moviesTopRated: [],
      moviesUpcoming: [],
      moviesNowPlaying: [],
      profiles: []
    }
  },
  components: {
    ListMovies,
    DialogForUserWithoutProfile
  },
  methods: {
    loadMoviesPopular() {
      movieService.getPopular().then((response) => {
        this.moviesPopular = response.data.results
      })
    },
    loadMoviesTopRated() {
      movieService.getTopRated().then((response) => {
        this.moviesTopRated = response.data.results
      })
    },
    loadMoviesUpComing() {
      movieService.getUpComing().then((response) => {
        this.moviesUpcoming = response.data.results
      })
    },
    loadProfiles() {
      profileService.getList({
        email: this.$store.getters.authUser.email,
        token: this.$store.getters.authUser.token
      }).then((response) => {
        this.profiles = response.data
      })
    }
  },
  mounted() {
    this.loadMoviesPopular(),
    this.loadMoviesTopRated(),
    this.loadMoviesUpComing(),
    this.loadProfiles()
  }
}
</script>
