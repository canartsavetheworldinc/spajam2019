<template>
  <div class="tabs-container">
    <div class="tab">
      <TabItem :key="i" v-for="(tab, i) in tabs">{{ tab }}</TabItem>
    </div>
    <div class="neon"></div>
  </div>
</template>

<script>
import TabItem from '@/components/TabItem'

export default {
  name: 'Tabs',
  props: {
    msg: String
  },
  components: {
    TabItem
  },
  data () {
    return {
      tabs: ['HOT', 'IT', 'ビジネス', 'スポーツ']
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
  background-color: #9cfaa0;
}
.tab {
  display: flex;
  align-items: flex-end;
  height: 100%;
  overflow-x: scroll;
}
.neon {
  width: 100%;
  height: 3px;
  background-color: #ff14c0;
}
</style>
