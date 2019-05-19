<template>
  <div class="detail-container">
    <DetailHeader class="header"></DetailHeader>
    <div class="content">
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader'

export default {
  components: {
    DetailHeader
  },
  computed: {
    article () {
      const id = this.$route.params.id
      if (id === undefined) {
        return {}
      }
      return this.$store.getters.articles[id]
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* width: 100vw; */
  min-height: 50px;
  height: 50px;
}
.content {
  margin-top: 70px;
}
</style>
