import {http, headers} from '../config'

export default {
    getList() {
        return http.get('/profiles', { headers: headers })
    },
    create(profile) {
        return http.post('/profiles', profile, { headers: headers})
    }
}