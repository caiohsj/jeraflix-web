<template>
    <div>
      <FormSearchMovie/>

      <div v-if="dataReady">
        <h1>Recommended for you</h1>
        <ListMovies v-bind:movies="recommendedMovies"/>
      </div>
      <div class="loading" v-if="showLoadingRecommendations">
        <img src="../assets/loading.gif" />
      </div>

      <div v-if="!showLoadingWatchlist">
        <h1 v-if="dataReady">Watch Later</h1>
        <ListMovies v-bind:movies="moviesWatchlist"/>
      </div>
      <div class="loading" v-else>
        <img src="../assets/loading.gif" />
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
import FormSearchMovie from '@/components/FormSearchMovie.vue'

import movieService from '../services/themoviedb/movie'
import profileService from '../services/jeraflix_api/profile'

export default {
    name: 'Movies',
    data() {
        return {
            moviesPopular: [],
            moviesTopRated: [],
            moviesUpcoming: [],
            moviesNowPlaying: [],
            moviesWatchlist: [],
            watchedMovies: [],
            recommendedMovies: [],
            showLoadingWatchlist: true,
            showLoadingRecommendations: true,
            profile: this.$store.getters.profile,
            dataReady: false
        }
    },
    components: {
        ListMovies,
        FormSearchMovie
    },
    methods: {
        loadWatchlist() {
            if (this.profile) {
                profileService.getWatchlist(this.profile.id).then(response => {
                    this.moviesWatchlist = response.data.movies
                    this.showLoadingWatchlist = false
                })
            }
        },
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
        this.loadRecommendedMovies(),
        this.loadWatchlist(),
        this.loadMoviesPopular(),
        this.loadMoviesTopRated(),
        this.loadMoviesUpComing(),
        this.dataReady = true
    }
}
</script>