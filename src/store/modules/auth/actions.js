import userService from '@/services/jeraflix_api/user'

export default {
    async login(context, payload) {
        await userService.login(payload.email, payload.pass).then((response) => {
            if (response.data.user) {
                context.commit('setUser', response.data.user)
                context.commit('setStatus', 'AUTHENTICATED')
                context.commit('setProfiles', response.data.profiles)
                sessionStorage.setItem('authUser', JSON.stringify(response.data.user))
            }
        })
    },
    logout(context) {
        context.commit('setUser', {})
        context.commit('setStatus', 'NO_AUTHENTICATED')
        context.commit('setProfiles', [])
        sessionStorage.removeItem('authUser');
    }
}