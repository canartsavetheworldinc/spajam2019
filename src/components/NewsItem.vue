<template>
  <div class="news-item-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-item-container {
  width: 87.7%;
  height: 90px;
  margin: 16px 13px;
  padding: 10px;
  border-radius: 7px;
  background-color: white;
}
</style>
