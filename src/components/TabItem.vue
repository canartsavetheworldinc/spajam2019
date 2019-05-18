<template>
  <div class="tab-item-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabItem'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-item-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 100px;
  width: 100px;
  height: 30px;
  margin: 0 5px;
  padding-bottom: 4px;
  /* border: 1px solid black; */
}
</style>
