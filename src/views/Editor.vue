<template>
  <div class="editor-container">
    <DetailHeader class="header"></DetailHeader>
    <div class="editor-area">
      <div class="title">
        <div>title</div>
        <input type="text">
      </div>
      <div class="content">
        <div>content</div>
        <textarea></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader'

export default {
  name: 'Editor',
  components: {
    DetailHeader
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* width: 100vw; */
  min-height: 50px;
  height: 50px;
}

.editor-area {
  justify-content: space-around;
  margin-top: 70px;
}
.title {
  font-size: 20px;
}
.content {
  font-size: 20px;
}
</style>
