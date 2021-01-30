export default {
    addProfile(context, profile) {
        context.commit('setProfile', profile)
    }
}