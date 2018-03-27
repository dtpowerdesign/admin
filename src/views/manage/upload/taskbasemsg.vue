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
      name: '上传任务基本信息文档',
      fileName: 'taskbasemsg.html'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
