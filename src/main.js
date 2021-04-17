import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '426200871833-jgc7deh5rr5m35jfh8d10k8e6po4nh23.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent'
}

Vue.config.productionTip = false
Vue.use(GAuth, gauthOption)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
