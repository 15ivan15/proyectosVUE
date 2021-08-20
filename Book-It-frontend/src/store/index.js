import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_auth: false,
  },
  mutations: {
    seguir(state) {
      state.is_auth = false
    },
    salir(state) {
      state.is_auth = true
    },
  },
  actions: {
  },
  modules: {
  }
})
