<template>
  <div>
      <!-- <a :href="$domain.domain1 + 'electric-design/public/templets/platprotocl.html'" target="_blank">打开</a> -->
      <span style="font-size:1.5rem">{{this.$parent.name}}</span>
   <el-upload
  class="upload-demo"
  drag
  :on-success="success"
  :on-error="error"
  :action="$domain.domain1 + 'electric-design/uploadData'"
  name="data"
  :data="{dataSavePath: '/electric-design/public/templets/' + this.$parent.fileName}">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">请先将word文档转化成html格式，然后修改名字为{{this.$parent.fileName}}</div>
</el-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    success (response, file, fileList) {
      if (response.result) {
        this.$message({
          type: 'success',
          message: `${this.$parent.name}上传成功`
        })
      } else {
        this.$message({
          type: 'warning',
          message: `${this.$parent.name}上传失败`
        })
      }
    },
    error (err, file, fileList) {
      console.log(err)
      this.$message({
        type: 'warning',
        message: `${this.$parent.name}上传失败`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
