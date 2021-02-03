<template>
  <div class="home">
    <ListProfiles v-if="!profile" v-on:profileClicked="setProfile" v-bind:profiles="profiles"/>
    <div v-else>
      <div v-if="!showLoadingWatchlist">
        <h1 v-if="moviesWatchlist.length > 0">Watch Later</h1>
        <ListMovies v-bind:movies="moviesWatchlist"/>
      </div>
      <div class="loading" v-else>
        <img src="../assets/loading.gif" />
      </div>

      <div v-if="recommendedMovies.length > 0">
        <h1>Recommended for you</h1>
        <ListMovies v-bind:movies="recommendedMovies"/>
      </div>
      <div class="loading" v-if="showLoadingRecommendations">
        <img src="../assets/loading.gif" />
      </div>

      <h1>Popular Movies</h1>
      <ListMovies v-bind:movies="moviesPopular"/>
      <h1>Top Rated Movies</h1>
      <ListMovies v-bind:movies="moviesTopRated"/>
      <h1>Top Upcoming</h1>
      <ListMovies v-bind:movies="moviesUpcoming"/>
    </div>
  </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

.loading {
  display: block;
  text-align: center;
}
</style>

<script>
import ListMovies from '@/components/ListMovies.vue'
import ListProfiles from '@/components/ListProfiles'

import movieService from '../services/themoviedb/movie'
import profileService from '../services/jeraflix_api/profile'

export default {
  name: 'Home',
  data() {
    return {
      moviesPopular: [],
      moviesTopRated: [],
      moviesUpcoming: [],
      moviesNowPlaying: [],
      moviesWatchlist: [],
      watchedMovies: [],
      recommendedMovies: [],
      profiles: [],
      profile: this.$store.getters.profile,
      showLoadingWatchlist: true,
      showLoadingRecommendations: true
    }
  },
  components: {
    ListMovies,
    ListProfiles
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
    },
    loadWatchlist() {
      if (this.profile) {
        profileService.getWatchlist(this.profile.id).then(response => {
          this.moviesWatchlist = response.data.movies
          this.showLoadingWatchlist = false
        })
      }
    },
    setProfile(profile) {
      this.$store.dispatch('addProfile', profile).then(() => {
        this.profile = profile
        this.loadWatchlist()
        this.loadRecommendedMovies()
        this.$emit('setProfileNav', profile)
      })
    },
    loadRecommendedMovies() {
      if (this.profile) {
        profileService.getRecommendations(this.profile.id).then((response) => {
          this.recommendedMovies = response.data
          this.showLoadingRecommendations = false
        })
      }
    }
  },
  mounted() {
    this.loadMoviesPopular(),
    this.loadMoviesTopRated(),
    this.loadMoviesUpComing(),
    this.loadProfiles(),
    this.loadWatchlist(),
    this.loadRecommendedMovies()
  }
}
</script>
