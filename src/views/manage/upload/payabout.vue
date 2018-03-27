<template>
  <div>
    <my-upload></my-upload>
  </div>
</template>

<script>
import myUpload from '@/components/upload'
export default {
  components: {myUpload},
  data () {
    return {
      name: '上传付款相关的帮助文档',
      fileName: 'payabout.html'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
