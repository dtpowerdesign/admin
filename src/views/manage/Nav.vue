<template>
  <div>
   导航
   <span>
   {{$cookie.get('adminUser')}}你好
   </span>
   <span>点击左侧相应导航即可跳转至相应管理页面</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
