<template>
    <div>
        <h1>Found movies by: "{{query}}"</h1>
        <ListMovies v-bind:movies="foundMovies"/>
    </div>
</template>

<style scoped>
h1 {
    color: #2d3436;
    padding: 10px;
}
</style>

<script>
import movieService from '../services/themoviedb/movie'
import ListMovies from '../components/ListMovies.vue'

export default {
    name: 'SearchMovie',
    components: {
        ListMovies
    },
    data() {
        return {
            query: null,
            foundMovies: []
        }
    },
    methods: {
        getQuerySearch() {
            this.query = this.$route.query.search;
            if (this.query && this.query != '') {
                movieService.search(this.query).then(response => {
                    this.foundMovies = response.data.results
                })
            }
        }
    },
    mounted() {
        this.getQuerySearch()
    }
}
</script>