import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: new Array(30).fill(null)
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    articles (store) {
      return store.articles
    }
  }
})
