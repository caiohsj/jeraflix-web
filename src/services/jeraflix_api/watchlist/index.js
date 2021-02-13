import {http, getHeaders} from '../config.js'

export default {
    add(profile, movie) {
        const headers = getHeaders()
        return http.post('/watchlist', {
            profile_id: profile.id,
            movie_id: movie.id
        }, { headers: headers })
    }
}