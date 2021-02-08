export default {
    setUser(state, payload) {
        state.authUser = payload
    },
    setStatus(state, status) {
        state.status = status
    },
    setProfiles(state, profiles) {
        state.profiles = profiles
    }
}