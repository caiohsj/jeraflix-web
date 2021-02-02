import userService from '@/services/jeraflix_api/user'

export default {
    async login(context, payload) {
        await userService.login(payload.email, payload.pass).then((response) => {
            if (response.data != '') {
                context.commit('setUser', response.data)
                context.commit('setStatus', 'AUTHENTICATED')
                sessionStorage.setItem('authUser', JSON.stringify(response.data))
            }
        })
    },
    logout(context) {
        context.commit('setUser', {})
        context.commit('setStatus', 'NO_AUTHENTICATED')
        sessionStorage.removeItem('authUser');
    }
}