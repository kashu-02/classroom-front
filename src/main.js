import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '426200871833-p67l34fapm4ed35naceutp9go7tgvrlb.apps.googleusercontent.com',
  scope: 'profile email https://www.googleapis.com/auth/classroom.announcements.readonly https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.rosters.readonly ',
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
