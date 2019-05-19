<template>
  <div class="checker-container">
    <CheckerItem class="checker-item" :onclick="click" :img="mainCheckerImg"></CheckerItem>
    <CheckerItem class="checker-item" :onclick="checkerFuncs[0]" :img="checkerImgs[0]"></CheckerItem>
    <CheckerItem class="checker-item" :onclick="checkerFuncs[1]" :img="checkerImgs[1]"></CheckerItem>
  </div>
</template>

<script>
import CheckerItem from '@/components/CheckerItem'

export default {
  name: 'Checker',
  props: {
    imgs: Array,
    funcs: Array
  },
  components: {
    CheckerItem
  },
  data () {
    return {
      mainCheckerImg: 'catalog'
    }
  },
  methods: {
    click () {
      for (const i in this.$children) {
        const el = this.$children[i].$el
        if (!el.style.transform) {
          el.style.transform = `translateX(-${i * 130}%)`
          el.style.filter = `drop-shadow(rgb(136, 136, 136) 1.5px 1.5px 0.2rem)`
          this.mainCheckerImg = 'cross'
        } else {
          el.style.transform = ''
          el.style.filter = ''
          this.mainCheckerImg = 'catalog'
        }
      }
    }
  },
  computed: {
    checkerImgs () {
      return this.imgs || []
    },
    checkerFuncs () {
      return this.funcs || []
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
  filter: drop-shadow(rgb(136, 136, 136) 1.5px -1.5px 0.2rem);
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
