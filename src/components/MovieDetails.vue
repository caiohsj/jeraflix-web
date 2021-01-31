<template>
    <div class="content" v-if="movie">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" >
        <div class="details">
            <div class="actions">
                <button v-on:click="addMovieInWatchlist(movie)">Watch later</button>
                <button>Favorite</button>
                <button v-on:click="addMovieInWatchedMoviesList(movie)">Assistido</button>
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
</style>

<script>
export default {
    name: 'MovieDetails',
    props: [
        'movie'
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