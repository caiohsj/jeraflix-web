import {http, config} from '@/services/themoviedb/config'

export default {
    getPopular() {
        return http.get(`/movie/popular?api_key=${config.apiKey}`)
    },
    getTopRated() {
        return http.get(`/movie/top_rated?api_key=${config.apiKey}`)
    },
    getUpComing() {
        return http.get(`/movie/upcoming?api_key=${config.apiKey}`)
    },
    getNowPlaying() {
        return http.get(`/movie/now_playing?api_key=${config.apiKey}`)
    },
    getLatest() {
        return http.get(`/movie/latest?api_key=${config.apiKey}`)
    },
    get(id) {
        return http.get(`/movie/${id}?api_key=${config.apiKey}`)
    },
    search(query) {
        return http.get(`/search/movie?query=${query}&api_key=${config.apiKey}`)
    }
}