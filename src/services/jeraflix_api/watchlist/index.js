import {http, headers} from '../config.js'

export default {
    add(profile, movie) {
        return http.post('/watchlist', {
            profile_id: profile.id,
            movie_id: movie.id
        }, { headers: headers })
    }
}