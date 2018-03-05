<template>
  <div>
   totalMsg
   <el-table :data="data">
     <el-table-column label="键值" prop="key"></el-table-column>
     <el-table-column label="表头" prop="title"></el-table-column>
     <el-table-column label="数值">
       <template slot-scope="scope">
         <el-input v-model="scope.row.value"></el-input>
       </template>
     </el-table-column>
     <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="change(scope.$index, scope.row)">修改</el-button>
        </template>
     </el-table-column>
   </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getLastTotalMsgTableTitleAndData').then((res) => {
        this.data = res.data[0].slice(1)
        console.log(this.data)
      }).catch((err) => { console.log(err) })
    },
    change (index, row) {
      var json1 = {}
      json1.code = '1'
      json1[row.key] = row.value
      this.$http.post(this.$domain.domain1 + 'electric-design/updateTotalMsg', {
        'code': '1',
        'data': json1
      }).then((res) => {
        if (res.data.result) {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.initData()
        }
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
