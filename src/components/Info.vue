<template>
  <div class="Info">
   <el-menu default-active="/" router mode="horizontal" class="el-menu-vertical" menu-trigger="click" text-color="black">
        <el-submenu index="person">
        <template slot="title">
          <i class="icon iconfont icon-guanliyuan"></i><span>{{name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage">后台首页</el-menu-item>
          <el-menu-item index="/login">退出登录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: this.$cookie.get('adminUser')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Info{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>
