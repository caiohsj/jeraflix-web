<template>
    <form v-on:submit.prevent="search">
        <div class="search">
            <input type="text" v-model="query">
            <button type="submit"><FontAwesomeIcon icon="search" /></button>
        </div>
    </form>
</template>

<style scoped>
form {
    margin: 30px;
}

.search {
    border: 2px solid #dfe6e9;
    width: 280px;
    height: 40px;
    border-radius: 5px;
    position: relative;
}

.search input {
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    color: #636e72;
    transition: all 0.4s;
}

.search input:focus {
    box-shadow: 0px 0px 4px 4px #dfe6e9;
}

.search button {
    width: 20%;
    height: 100%;
    border: none;
    cursor: pointer;
    transition: all 0.4s;
    z-index: 1;
}

.search button:hover {
    color: #ffffff;
    background: #b2bec3;
}
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

export default {
    name: 'FormSearchMovie',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            query: ''
        }
    },
    methods: {
        search() {
            this.$router.push({name: 'movie.search', query: {search: this.query}})
        }
    }
}
</script>