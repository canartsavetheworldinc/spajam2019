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
      },
      {
        title: 'かっほー',
        content: 'hogefuga'
      },
      {
        title: 'きっほー',
        content: 'hogefuga'
      },
      {
        title: 'くっほー',
        content: 'hogefuga'
      },
      {
        title: 'けっほー',
        content: 'hogefuga'
      }
    ]
  },
  mutations: {
    update_articles (context) {
      console.log(context)
    }
  },
  actions: {
    async fetch_articles (context) {
      // console.log(context)
      // context.state.articles = await fetch(`https://us-central1-spajam2019-9b8c1.cloudfunctions.net/news`)
    }
  },
  getters: {
    articles (store) {
      return store.articles
    }
  }
})
