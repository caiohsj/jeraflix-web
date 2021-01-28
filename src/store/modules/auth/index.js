import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

const NO_AUTHENTICATED = 'NO_AUTHENTICATED'

export default {
    state() {
        return {
            authUser: {},
            status: NO_AUTHENTICATED
        }
    },
    mutations,
    actions,
    getters
}