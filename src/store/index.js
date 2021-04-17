import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'vue-gauth',
    paths: ['jwt_token'],
    storage: window.sessionStorage
  })],
  state: {
    jwt_token: {}
  },
  mutations: {
    update_jwt_token: function (state, jwt_token) {
      state.jwt_token = jwt_token
    }
  },
  actions: {
  }
})