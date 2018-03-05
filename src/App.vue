<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.leftNav{
  background-color:#4d83e7;
  height: 100%;
  .el-submenu__title i{
    color:#fff;
}
  .el-menu{
    border-right:0;
  }

  .el-menu-item.is-active{
    color: yellow;
    font-size: 1.1rem;
    background-color:gray;
  }
  .el-submenu .el-menu-item{
    min-width:auto;
  }
}
.manage{
  height: 100%;
  .left, .right{
    height: 100%;
  }
}
.cell{
  text-align: center;
  color:#409EFF;
}
</style>
