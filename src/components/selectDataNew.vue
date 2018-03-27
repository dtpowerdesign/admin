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
  data () {
    return {
      data: [],
      newData: ''
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getDataOfClassKey')
        .then((res) => {
          this.data = res.data[this.$parent.type]
        }).catch((err) => {
          console.log(err)
        })
    },
    add () {
      this.$http.post(this.$domain.domain1 + 'electric-design/addNewArrayToOldArray', {'table': 'classKey', 'key': 'code', 'value': '1', 'arrayKey': this.$parent.type, 'newArray': [this.newData]})
        .then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: `新的${this.$parent.name}:${this.newData}添加成功`
            })
            this.initData()
          } else {
            this.$message({
              type: 'success',
              message: `${this.$parent.name}:${this.newData}添加失败`
            })
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    handleDelete (index, row) {
      this.$http.post(this.$domain.domain1 + 'electric-design/delChildArrayFormOldArray', {'table': 'classKey', 'key': 'code', 'value': '1', 'arrayKey': this.$parent.type, 'childArray': [row]})
        .then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: `${this.$parent.name}:${row}删除成功`
            })
            this.initData()
          } else {
            this.$message({
              type: 'success',
              message: `${this.$parent.name}:${row}删除失败`
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
