<template>
    <div>
        <BackLink v-bind:link="linkToReturn"/>
        <AlertMessageDanger v-bind:message="messageDanger"/>
        <AlertMessageSuccess v-bind:message="messageSuccess"/>
        <MovieDetails v-on:addInWatchlist="addMovieInWatchlist" v-bind:movie="movie"/>
    </div>
</template>

<style scoped>

</style>

<script>
import MovieDetails from '../components/MovieDetails.vue'
import BackLink from '../components/BackLink.vue'
import movieService from '../services/themoviedb/movie'
import watchlistService from '../services/jeraflix_api/watchlist'
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
            messageSuccess: ''
        }
    },
    methods: {
        loadMovie() {
            const id = this.$route.params.id
            movieService.get(id).then(response => {
                this.movie = response.data
            })
        },
        addMovieInWatchlist(movie) {
            const profile = this.$store.getters.profile
            if (profile) {
                watchlistService.add(profile, movie).then(response => {
                    if (response.data.status)
                        this.messageSuccess = 'Movie has been added.'
                    else
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