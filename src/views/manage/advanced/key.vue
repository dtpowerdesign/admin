<template>
  <div>
   key
   <el-table :data="data">
       <el-table-column label="管理员key来源姓名">
           <template slot-scope="scope">
               <el-input v-model="scope.row.sorceName"></el-input>
           </template>
       </el-table-column>
       <el-table-column label="管理员key来源账号">
           <template slot-scope="scope">
               <el-input v-model="scope.row.sorceAccont"></el-input>
           </template>           
       </el-table-column>
       <el-table-column label="管理员注册密匙">
           <template slot-scope="scope">
               <el-input v-model="scope.row.manageSecret"></el-input>
           </template>           
       </el-table-column>
       <el-table-column label="等级">
           <template slot-scope="scope">
               <el-select v-model="scope.row.rank">
                   <el-option v-for="(i, j) in rank" :key="j" :label="i" :value="i"></el-option>
               </el-select>
           </template>
       </el-table-column>
       <el-table-column label="操作">
           <template slot-scope="scope">
               <el-button @click="myAdd(scope.row)" type="success">确认</el-button>
               <el-button @click="myDelete(scope.row)" type="danger">删除</el-button>
           </template>
       </el-table-column>
   </el-table>
   <el-button @click="addRow()" type="primary">增加一行</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      rank: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getManageKeyByMultiConditions', {
        'conditions': {'rank': {'searchMethod': 'rangeORvalues', 'minValue': '1', 'maxValue': '10'}}
      })
        .then((res) => {
          console.log(res.data)
          this.data = res.data
        //   this.data = [{'sorceName': ''}, {'sorceAccount': ''}, {'sorceSecret': ''}, {'rank': ''}]
        }).catch((err) => {
          console.log(err)
        })
    },
    addRow () {
      this.data.push({
        'sorceName': '',
        'sorceAccount': '',
        'manageSecret': '',
        'rank': ''
      })
    },
    myAdd (row) {
      this.$http.post(this.$domain.domain1 + 'electric-design/addManageKey', row)
        .then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.initData()
          } else {
            this.$message({
              type: 'warning',
              message: `添加失败,原因${res.data.reason}`
            })
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    myDelete (row) {
      this.$http.post(this.$domain.domain1 + 'electric-design/delManageKey', {
        'key': 'manageSecret',
        'value': row.manageSecret
      })
        .then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.initData()
          } else {
            this.$message({
              type: 'warning',
              message: `删除失败,原因${res.data.reason}`
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
