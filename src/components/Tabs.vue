<template>
  <div class="tabs-container">
    <div class="tab">
      <TabItem :key="i" :color="tab.color" v-for="(tab, i) in tabs">{{ tab.title }}</TabItem>
    </div>
    <div class="neon"></div>
  </div>
</template>

<script>
import TabItem from '@/components/TabItem'

export default {
  name: 'Tabs',
  props: {
    data: Array
  },
  components: {
    TabItem
  },
  computed: {
    tabs () {
      return this.data || []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 50px;
  background-color: #f4f5f4;
}
.tab {
  display: flex;
  align-items: flex-end;
  height: 100%;
  overflow-x: scroll;
}
.tab::-webkit-scrollbar {
  display: none;
}
.neon {
  width: 100%;
  height: 3px;
  background-color: #ff1463;
}
</style>
