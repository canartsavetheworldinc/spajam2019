<template>
  <div class="checker-item-container" @click="click">
    checker
  </div>
</template>

<script>
export default {
  name: 'CheckerItem',
  props: {
    onclick: Function
  },
  computed: {
    click () {
      return this.onclick || function () {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checker-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 12px;
  /* border: 1px solid orangered; */
  border-radius: 100px;
  background-color: #9cfaa0;
}
</style>
