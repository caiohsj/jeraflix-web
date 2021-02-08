import {http, getHeaders} from '../config'

export default {
    async getList() {
        const headers = getHeaders()
        return await http.get('/profiles', { headers: headers })
    },
    create(profile) {
        const headers = getHeaders()
        return http.post('/profiles', profile, { headers: headers})
    },
    get(id) {
        const headers = getHeaders()
        return http.get('/profiles/'+id, { headers: headers})
    },
    getWatchlist(id) {
        const headers = getHeaders()
        return http.get(`/profiles/${id}/watchlist`, { headers: headers })
    },
    getWatchedMovies(id) {
        const headers = getHeaders()
        return http.get(`/profiles/${id}/watched_movies`, { headers: headers })
    },
    getRecommendations(id) {
        const headers = getHeaders()
        return http.get(`/profiles/${id}/recommendations`, { headers: headers })
    }
}