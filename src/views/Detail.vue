<template>
  <div class="detail-container">
    <DetailHeader class="header"></DetailHeader>
    <div class="content">
      <h1>{{ article.title }}</h1>
      <p>{{ article.text }}</p>
    </div>
    <Checker class="checker" :imgs="checkerImgs" :funcs="[goToEditor]"></Checker>
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader'
import Checker from '@/components/Checker'

export default {
  components: {
    DetailHeader,
    Checker
  },
  data () {
    return {
      checkerImgs: ['pencil', 'share']
    }
  },
  methods: {
    goToEditor () {
      this.$router.push({ path: `/news/${this.$route.params.id}/edit` })
    }
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
.checker {
  position: fixed;
  bottom: 10%;
  right: 7%;
}
</style>
