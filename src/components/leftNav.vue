<template>
  <div class="leftNav">
     <el-menu
      default-active="/"
      router
      class="el-menu-vertical-demo"
      background-color="#4d83e7"
      text-color="#fff"
      active-background-color="#409EFF"
      :default-openeds="['table']"
      unique-opened>
      <el-submenu index="table">
        <template slot="title">
          <i class="icon iconfont icon-biaoge"></i>
          <span class="fontBig">后台的各种表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/contract">合同表</el-menu-item>
          <el-menu-item index="/manage/cuser">企业用户表</el-menu-item>
          <el-menu-item index="/manage/puser">个人用户表</el-menu-item>
          <el-menu-item index="/manage/event">事件表</el-menu-item>
          <el-menu-item index="/manage/invoice">账单表</el-menu-item>
          <el-menu-item index="/manage/project">项目表</el-menu-item>
          <el-menu-item index="/manage/website">网站统计表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     <el-submenu index="website">
        <template slot="title">
          <i class="icon iconfont icon-wangluo"></i>
          <span class="fontBig">网站相关</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/homePage">网站首页</el-menu-item>
          <el-menu-item index="/manage/homePageCase">平台案例展示</el-menu-item>
          <el-menu-item index="/manage/endPage">网站底部</el-menu-item>
          <el-menu-item index="/manage/totalMsg">统计信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="seletData">
        <template slot="title">
          <i class="icon iconfont icon-leibie"></i>
          <span class="fontBig">类别/类型/专业</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/categorys">类别</el-menu-item>
          <el-menu-item index="/manage/types">类型</el-menu-item>
          <el-menu-item index="/manage/majors">专业</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="advanced">
        <template slot="title">
          <i class="icon iconfont icon-leibie"></i>
          <span class="fontBig">高级管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/key">key管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
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

.icon{
    color:#fff;
    margin-left:-1.5rem;
    font-size:1.5rem;
}
span{
  font-size:1rem;
}
.fontBig{
  font-size:1.3rem;
  font-weight:100;
}
</style>
