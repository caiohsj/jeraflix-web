import {http} from '@/services/jeraflix_api/config.js'

export default {
    create(user) {
        return http.post('/users', user)
    },
    login(email, pass) {
        const user = {
            email: email,
            password: pass
        }
        return http.post('/auth', user)
    }
}