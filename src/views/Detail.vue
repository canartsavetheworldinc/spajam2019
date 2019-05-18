<template>
  <div class="detail">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    debug () {
      console.log(this.$route.params.id)
      return 'debug'
    },
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
