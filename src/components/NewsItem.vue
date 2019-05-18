<template>
  <div class="news-item-container">
    <router-link class="link" :to="link">
      <div>{{ title || "notitle" }}</div>
      <p><slot></slot></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    id: Number,
    title: String
  },
  computed: {
    link () {
      return `/news/${this.id}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-item-container {
  /* width: 87.7%; */
  height: 90px;
  /* margin: 16px 13px; */
  margin: 16px 0;
  padding: 10px;
  /* border-radius: 7px; */
  background-color: white;
  color: #323232;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
