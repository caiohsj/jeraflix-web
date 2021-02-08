import { http, getHeaders } from '../config.js'

export default {
    get(profile, id) {
        const headers = getHeaders()
        return http.get(`/movie/${id}/profile/${profile.id}`, { headers: headers })
    }
}