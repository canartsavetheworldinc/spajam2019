<template>
  <div class="tab-item-container" :style="style">
    <!-- <img src="../assets/tab-3.svg"> -->
    <!-- <div class="title"> -->
      <slot></slot>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    color: String
  },
  computed: {
    style () {
      const color = this.color || '#ffffff'
      return `background-color: ${color}`
    }
  }
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
  font-family: 'Meiryo';
  font-weight: bold;
  color: white;
}
.title {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
