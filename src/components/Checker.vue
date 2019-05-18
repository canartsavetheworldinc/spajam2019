<template>
  <div class="checker-container">
    <CheckerItem class="checker-item" :onclick="click"></CheckerItem>
    <CheckerItem class="checker-item"></CheckerItem>
    <CheckerItem class="checker-item"></CheckerItem>
  </div>
</template>

<script>
import CheckerItem from '@/components/CheckerItem'

export default {
  name: 'Checker',
  props: {
    msg: String
  },
  components: {
    CheckerItem
  },
  methods: {
    click () {
      for (const i in this.$children) {
        const el = this.$children[i].$el
        if (!el.style.transform) {
          el.style.transform = `translateX(-${i * 130}%)`
        } else {
          el.style.transform = ''
        }
      }
    }
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
}
.checker-item:first-child {
  background-color: #ff14c0;
  color: white;
  z-index: 1;
}
.checker-item {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateZ(90deg);
  transition: transform .3s ease;
}
.checker-item:focus {
  outline: none;
}
</style>
