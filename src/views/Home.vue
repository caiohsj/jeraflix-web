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

      <h1>Recommended for you</h1>
      <ListMovies v-bind:movies="recommendedMovies"/>
    </div>
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
      showLoadingWatchlist: true
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
          let recommendations = response.data.recommendations
          this.moviesWatchlist = response.data.movies
          this.showLoadingWatchlist = false
          this.loadRecommendedMovies(recommendations)
        })
      }
    },
    loadWatchedMovies() {
      if (this.profile) {
        profileService.getWatchedMovies(this.profile.id).then(response => {
          let recommendations = response.data.recommendations
          this.watchedMovies = response.data.movies
          this.loadRecommendedMovies(recommendations)
        })
      }
    },
    setProfile(profile) {
      this.$store.dispatch('addProfile', profile).then(() => {
        this.profile = profile
        this.loadWatchlist()
        this.loadWatchedMovies()
      })
    },
    loadRecommendedMovies(recommendations) {
      let movies = [];
      recommendations.forEach(item => {
        movies = movies.concat(item.results)
      })
      for(let i = 0; i < movies.length; i++){
        let found = false;
        for(let j = 0; j < this.recommendedMovies.length; j++){
          if(movies[i].id == this.recommendedMovies[j].id) {
            found = true;
          }
        }
        if(!found)
          this.recommendedMovies.push(movies[i])
      }
    }
  },
  mounted() {
    this.loadMoviesPopular(),
    this.loadMoviesTopRated(),
    this.loadMoviesUpComing(),
    this.loadProfiles(),
    this.loadWatchlist(),
    this.loadWatchedMovies()
  }
}
</script>
