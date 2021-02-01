import { http, headers } from '../config.js'

export default {
    get(profile, id) {
        return http.get(`/movie/${id}/profile/${profile.id}`, { headers: headers })
    }
}