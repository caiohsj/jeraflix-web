import {http, headers} from '../config'

export default {
    getList() {
        return http.get('/profiles', { headers: headers })
    },
    create(profile) {
        return http.post('/profiles', profile, { headers: headers})
    },
    get(id) {
        return http.get('/profiles/'+id, { headers: headers})
    },
    getWatchlist(id) {
        return http.get(`/profiles/${id}/watchlist`, { headers: headers })
    },
    getWatchedMovies(id) {
        return http.get(`/profiles/${id}/watched_movies`, { headers: headers })
    }
}