<template>
  <router-link to="/about">
    <div class="checker-container">
      checker
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Checker',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checker-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 12px;
  /* border: 1px solid orangered; */
  border-radius: 100px;
  background-color: orange;
  color: white;
}
</style>
