import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate(){
    const authUser = JSON.parse(sessionStorage.getItem('authUser'));
    if(authUser){
        this.$store.commit('setUser', authUser);
        this.$store.commit('setStatus', 'AUTHENTICATED');
        this.$router.push({name: 'home'})
    }
  },
  render: h => h(App)
}).$mount('#app')
