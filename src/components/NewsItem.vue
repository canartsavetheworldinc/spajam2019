<template>
  <div class="news-item-container" :style="style">
    <router-link class="link" :to="link">
      <div class="title-container">
        <h2>{{ title || "notitle" }}</h2>
        <div class="reliability-container">
          <img src="../assets/chain.png" :style="reliability || 'display: none;'">
          {{ reliability }}
        </div>
      </div>
      <!-- <p><slot></slot></p> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    id: Number,
    title: String
  },
  data () {
    return {
      samplePictures: [
        '/sample_pictures/First_Child.jpeg',
        '/sample_pictures/kotonoha-6.png',
        '/sample_pictures/kotonoha-5.png',
        '/sample_pictures/kotonoha-1.png',
        '/sample_pictures/kotonoha-2.png',
        '/sample_pictures/kotonoha-3.png',
        '/sample_pictures/kotonoha-4.png'
      ],
      sampleReliability: [10000, 1000, 500]
    }
  },
  methods: {
    comma (n) {
      const rev = ('' + n).split('').reverse()
      let ret = ''
      for (const i in rev) {
        ret += rev[i]
        if (i < rev.length - 1 && i % 3 === 2) {
          ret += ','
        }
      }
      ret = ret.split('').reverse().join('')
      return ret
    }
  },
  computed: {
    style () {
      const pic = this.samplePictures[this.id]
      return pic && `background-image: url(${pic}); backgound-color: unset;`
    },
    link () {
      return `/news/${this.id}`
    },
    reliability () {
      const rel = this.sampleReliability[this.id]
      return rel && this.comma(rel)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 7px 0;
}
.news-item-container {
  /* width: 87.7%; */
  height: 90px;
  /* margin: 16px 13px; */
  margin: 16px 0;
  padding: 10px;
  /* border-radius: 7px; */
  background-color: #c4c4c4;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.news-item-container:first-child h2 {
  margin-top: 19px;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  color: #323232;
}
.title-container {
  position: absolute;
  right: -10px;
  bottom: -10px;
  left: -10px;
  background-color: rgba(196, 196, 196, 0.8);
  font-family: 'Meiryo';
}
.reliability-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.reliability-container > img {
  height: 37px;
  margin: -12px 0;
}
</style>
