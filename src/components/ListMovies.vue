<template>
    <div class="list" v-if="movies.length > 0">
        <div class="movies">

            <article v-for="movie in movies" v-bind:key="movie.id">
                <router-link :to="{ name: 'movie', params: { id: movie.id } }">
                    <img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
                </router-link>
               <header>
                    <h3>{{ movie.original_title }}</h3>
                </header>
            </article>

        </div>
    </div>
</template>

<style scoped>
body {
    overflow-x: hidden !important;
}

.list {
    padding-left: 30px;
    position: relative;
}

.movies {
    padding: 20px;
    margin: auto;
    width: 90%;
    height: 560px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
}

::-webkit-scrollbar {
  height: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

article {
    border: 1px solid #0DB551;
    height: 500px;
    box-shadow: 0px 0px 9px 1px #0DB551;
    margin-bottom: 25px;
    margin-right: 15px;
    border-radius: 2%;
    padding: 15px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
}

article img {
    width: 200px;
    transition: all 0.4s;
}

article img:hover {
    z-index: 1;
    width: 250px;
}

article p {
    text-align: justify;
}

</style>

<script>

export default {
    name: 'ListMovies',
    props: [
        'movies'
    ]
}
</script>