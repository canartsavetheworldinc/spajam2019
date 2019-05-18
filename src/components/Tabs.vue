<template>
  <div class="tabs-container">
    tabs
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs-container {
  display: flex;
  align-items: flex-end;
  height: 50px;
  background-color: #9cfaa0;
}
</style>
