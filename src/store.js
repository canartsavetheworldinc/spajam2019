import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [
      {
        title: 'あっほー',
        content: 'hoge'
      },
      {
        title: 'いっほー',
        content: 'hogehoge'
      },
      {
        title: 'うっほー',
        content: 'fuga'
      },
      {
        title: 'えっほー',
        content: 'fugafuga'
      },
      {
        title: 'おっほー',
        content: 'hogefuga'
      }
    ]
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
