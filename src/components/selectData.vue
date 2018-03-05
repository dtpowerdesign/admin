<template>
  <div>
   <el-table :data="data" style="width: 100%" border>
      <el-table-column :label="$parent.name">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" :content="$parent.name" placement="top-start">
          <span>{{scope.row}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
   </el-table>
   <div>
    <span style="color:red">输入新的{{$parent.name}}</span>
    <el-input v-model="newData" style="width:30%"></el-input>
    <el-button type="primary" @click="add()">添加<i class="icon iconfont icon-jia"></i></el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {
      newData: 'xx',
      data: []
    }
  },
  watch: {
    msg () {
      this.initData()
    }
  },
  methods: {
    initData () {
      this.data = this.msg
    },
    handleDelete (index, row) {
      this.$http.post(this.$domain.domain1 + 'electric-design/delTypeMajors', {
        'deltype': this.$parent.code,
        'value': row
      }).then((res) => {
        if (res.data.result) {
          this.$message({
            type: 'success',
            message: `已经删除${this.$parent.name}:${row}`
          })
          this.$parent.initData()
        } else {
          this.$message({
            type: 'warning',
            message: `删除失败，原因：${res.data.reason}`
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    add () {
      this.$http.post(this.$domain.domain1 + 'electric-design/addTypeMajors', {
        'addtype': this.$parent.code,
        'value': this.newData
      }).then((res) => {
        if (res.data.result) {
          this.$message({
            type: 'success',
            message: `已经添加新的${this.$parent.name}:${this.newData}`
          })
          this.$parent.initData()
        } else {
          this.$message({
            type: 'warning',
            message: `添加失败，原因：${res.data.reason}`
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
