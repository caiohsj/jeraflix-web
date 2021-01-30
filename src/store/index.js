import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/auth/index.js'
import profileModule from './modules/profile/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: authModule,
        profile: profileModule
    }
})