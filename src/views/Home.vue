<template>
  <div class="home-container">
    <Tabs class="tabs"></Tabs>
    <News class="news"></News>
    <Checker class="checker"></Checker>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabs from '@/components/Tabs'
import News from '@/components/News'
import Checker from '@/components/Checker'

export default {
  name: 'Home',
  components: {
    Tabs,
    News,
    Checker
  }
}
</script>

<style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
  }
  .tabs {
    position: fixed;
    width: 100%;
    min-height: 50px;
    height: 50px;
  }
  .news {
    flex-grow: 1;
    padding-top: 50px;
  }
  .checker {
    position: fixed;
    bottom: 10%;
    right: 7%;
  }
</style>
