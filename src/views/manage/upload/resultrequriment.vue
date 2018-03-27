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
      name: '上传项目设计成果要求的帮助文档',
      fileName: 'resultrequriment.html'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
