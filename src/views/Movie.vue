<template>
    <div>
        <BackLink v-bind:link="linkToReturn"/>
        <div class="messages" v-if="messageDanger != '' || messageSuccess != ''">
            <AlertMessageDanger v-bind:message="messageDanger"/>
            <AlertMessageSuccess v-bind:message="messageSuccess"/>
        </div>
        <MovieDetails v-on:addInWatchlist="addMovieInWatchlist" v-on:addInWatchedMoviesList="addMovieInWatchedMovies" v-bind:movie="movie" v-bind:inWatchlist="movieInWatchlist" v-bind:inWatchedMovies="movieInWatchedMovies"/>
    </div>
</template>

<style scoped>
.messages {
    padding: 30px;
}
</style>

<script>
import MovieDetails from '../components/MovieDetails.vue'
import BackLink from '../components/BackLink.vue'
import movieService from '../services/jeraflix_api/movie'
import watchlistService from '../services/jeraflix_api/watchlist'
import watchedMovieService from '../services/jeraflix_api/watched_movie'
import AlertMessageDanger from '../components/AlertMessageDanger.vue'
import AlertMessageSuccess from '../components/AlertMessageSuccess.vue'

export default {
    name: 'Movie',
    components: {
        MovieDetails,
        BackLink,
        AlertMessageDanger,
        AlertMessageSuccess
    },
    data() {
        return {
            movie: {},
            linkToReturn: '',
            messageDanger: '',
            messageSuccess: '',
            movieInWatchlist: null,
            movieInWatchedMovies: null
        }
    },
    methods: {
        loadMovie() {
            const id = this.$route.params.id
            let profile = this.$store.getters.profile
            movieService.get(profile,id).then(response => {
                console.log(response.data.movie_in_watchlist)
                this.movie = response.data.movie
                this.movieInWatchlist = response.data.movie_in_watchlist
                this.movieInWatchedMovies = response.data.movie_in_watched_movies
            })
        },
        addMovieInWatchlist(movie) {
            const profile = this.$store.getters.profile
            if (profile) {
                watchlistService.add(profile, movie).then(response => {
                    if (response.data.status) {
                        this.messageSuccess = 'Movie has been added.'
                        this.movieInWatchlist = true
                    } else
                        this.messageDanger = response.data.message
                })
            } else {
                this.messageDanger = 'Select one profile!'
            }
        },
        addMovieInWatchedMovies(movie) {
            const profile = this.$store.getters.profile
            if (profile) {
                watchedMovieService.add(profile, movie).then(response => {
                    if (response.data.status) {
                        this.messageSuccess = 'This movie was marked as watched.'
                        this.movieInWatchedMovies = true
                    } else
                        this.messageDanger = response.data.message
                })
            } else {
                this.messageDanger = 'Select one profile!'
            }
        }
    },
    mounted() {
        this.loadMovie()
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.linkToReturn = from.name
        })
    }
}
</script>