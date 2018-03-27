<template>
  <div class="leftNav">
     <el-menu
      default-active="/"
      router
      class="el-menu-vertical-demo"
      background-color="#4d83e7"
      text-color="#fff"
      active-background-color="#409EFF"
      :default-openeds="['search']"
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
     <el-submenu index="search">
        <template slot="title">
          <i class="icon el-input__icon el-icon-search"></i>
          <span class="fontBig">查询相关信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/puserState">查询个人用户状态</el-menu-item>
          <el-menu-item index="/manage/cuserState">查询企业用户状态</el-menu-item>
          <el-menu-item index="/manage/contractState">查询合同</el-menu-item>
          <el-menu-item index="/manage/eventState">查询事件</el-menu-item>
          <el-menu-item index="/manage/invoiceState">查询账单</el-menu-item>
          <el-menu-item index="/manage/projectState">查询项目状态</el-menu-item>
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
          <el-menu-item index="/manage/designProcess">设计阶段</el-menu-item>
          <el-menu-item index="/manage/duties">角色</el-menu-item>
          <el-menu-item index="/manage/sizeAndCapacitys">规模单位</el-menu-item>
          <el-menu-item index="/manage/payScale">付款比例</el-menu-item>
          <el-menu-item index="/manage/projectNowState">项目目前状态</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="upload">
        <template slot="title">
          <i class="icon iconfont icon-leibie"></i>
          <span class="fontBig">帮助文档</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/protocl">平台协议</el-menu-item>
          <el-menu-item index="/manage/taskbasemsg">任务基本信息</el-menu-item>
          <el-menu-item index="/manage/projectrequriment">项目资质要求</el-menu-item>
          <el-menu-item index="/manage/payabout">付款相关</el-menu-item>
          <el-menu-item index="/manage/resultrequriment">项目设计成果要求</el-menu-item>
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
