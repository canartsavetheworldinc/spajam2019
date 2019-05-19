import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDwXvyX-JMWEabEpeOrCV-R07DParHS8JI',
  // authDomain: '<PROJECT_ID>.firebaseapp.com',
  // storageBucket: '<BUCKET>.appspot.com',
  databaseURL: 'https://spajam2019-9b8c1.firebaseio.com/'
})

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
      firebase.database().ref(`/News`).once('value').then(data => {
        let list = []
        const obj = data.val()
        Object.keys(obj).forEach(function (key) {
          list.push(obj[key]['Block'][0])
        })
        // return list
        context.state.articles = list
      })
    }
  },
  getters: {
    articles (store) {
      return store.articles
    }
  }
})
