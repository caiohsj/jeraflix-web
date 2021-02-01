<template>
    <div class="content" v-if="movie">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" >
        <div class="details">
            <div class="actions">
                <button v-on:click="addMovieInWatchlist(movie)">
                    Watch later
                    <FontAwesomeIcon icon="clock" v-if="inWatchlist" class="checked"/>
                    <FontAwesomeIcon icon="clock" v-else/>
                </button>
                <button>Favorite</button>
                <button v-on:click="addMovieInWatchedMoviesList(movie)">
                    Assistido
                    <FontAwesomeIcon icon="check" class="checked" v-if="inWatchedMovies"/>
                    <FontAwesomeIcon icon="check" v-else/>
                </button>
            </div>
            <h1>{{ movie.original_title }}</h1>
            <p>{{ movie.overview }}</p>
        </div>
    </div>
</template>

<style scoped>
.content {
    padding: 30px;
    display: flex;
}

.content img {
    margin-right: 15px;
    border-radius: 5px;
}

.details h1 {
    color: #2d3436;
    text-align: center;
}

.details p {
    color: #b2bec3;
    text-align: justify;
}

.actions {
    margin-bottom: 60px;
}

button {
    border: none;
    padding: 5px;
    margin-right: 5px;
    border-radius: 5%;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
}

.checked {
    color: #0DB551;
}

button:hover {
    color: #ffffff;
}

</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faCheck)

export default {
    name: 'MovieDetails',
    components: {
        FontAwesomeIcon
    },
    props: [
        'movie',
        'inWatchlist',
        'inWatchedMovies'
    ],
    methods: {
        addMovieInWatchlist(movie) {
            this.$emit('addInWatchlist', movie)
        },
        addMovieInWatchedMoviesList(movie) {
            this.$emit('addInWatchedMoviesList', movie)
        }
    }
}
</script>