import userService from '@/services/jeraflix_api/user/user.js'

export default {
    login(context, payload) {
        userService.login(payload.email, payload.pass).then((response) => {
            context.commit('setUser', response.data)
            context.commit('setStatus', 'AUTHENTICATED')
            sessionStorage.setItem('authUser', JSON.stringify(response.data))
        })
    },
    logout(context) {
        context.commit('setUser', {})
        context.commit('setStatus', 'NO_AUTHENTICATED')
        sessionStorage.removeItem('authUser');
    }
}