<template>
  <div class="news-container">
    <NewsItem class="news-item" :key="i" :id="i" :title="article.title" v-for="(article, i) in articles">
      {{ article.content }}
    </NewsItem>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

export default {
  name: 'News',
  components: {
    NewsItem
  },
  computed: {
    articles () {
      this.$store.dispatch('fetch_articles')
      return this.$store.getters.articles
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-container {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background-color: #f5f4f5;
}
.news-item:first-child {
  height: 180px;
}
</style>
