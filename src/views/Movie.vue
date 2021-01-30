<template>
    <div>
        <BackLink v-bind:link="linkToReturn"/>
        <MovieDetails v-bind:movie="movie"/>
    </div>
</template>

<style scoped>

</style>

<script>
import MovieDetails from '../components/MovieDetails.vue'
import BackLink from '../components/BackLink.vue'
import movieService from '../services/themoviedb/movie'

export default {
    name: 'Movie',
    components: {
        MovieDetails,
        BackLink
    },
    data() {
        return {
            movie: {},
            linkToReturn: ''
        }
    },
    methods: {
        loadMovie() {
            const id = this.$route.params.id
            movieService.get(id).then(response => {
                this.movie = response.data
            })
        }
    },
    mounted() {
        this.loadMovie()
    },
    beforeRouteEnter(to, from, next) {
        console.log(from.name)
        next(vm => {
            vm.linkToReturn = from.name
        })
    }
}
</script>