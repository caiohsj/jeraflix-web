import {http} from '../config'

export default {
    getList(user) {
        const headers = {
            'X-User-Email': user.email,
            'X-User-Token': user.token
        }
        return http.get('/profiles', { headers: headers })
    }
}