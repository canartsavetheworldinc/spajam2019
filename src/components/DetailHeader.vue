<template>
  <div class="detail-header-container">
    <div class="navigator back" @click="back">Back</div>
    <!-- <div class="logo-container"></div> -->
    <div class="navigator bookmark" @click="bookmark">Bookmark</div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    msg: String
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    bookmark () {
      console.log('bookmarked!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-header-container {
  display: flex;
  justify-content: space-between;
  background-color: #3D3D3D;
  background-image: url("/img/icons/apple-touch-icon-60x60.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.navigator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 100%;
}
.navigator.back {
  background-color: #9CFAA0;
}
.navigator.bookmark {
  background-color: #FEA3E6;
}
/* .logo-container {
} */
</style>
