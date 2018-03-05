<template>
  <div class="manage">
    <el-row style="height:100%">
      <el-col :span="4" class="left">
        <leftNav></leftNav>
      </el-col>
     <el-col :offset="4" :span="20" class="right">
       <Info></Info>
       <router-view></router-view>
     </el-col>
    </el-row>
  </div>
</template>

<script>
import leftNav from '@/components/leftNav'
import Info from '@/components/Info'
export default {
  components: {leftNav, Info},
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
  position: fixed;
}
.Info{
  
}
</style>
