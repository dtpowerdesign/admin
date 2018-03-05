<template>
  <div>
   endPage
   <el-table :data="table" border>
     <el-table-column prop="key" label="键值" min-width="15%"></el-table-column>
     <el-table-column prop="name" label="名字" min-width="15%"></el-table-column>
     <el-table-column label="值" min-width="70%">
       <template slot-scope="scope">
         <el-input v-model="scope.row.value" type="textarea" autosize></el-input>
       </template>
     </el-table-column>
     <el-table-column min-width="15%" label="确认">
       <template slot-scope="scope">
         <el-button @click="change(scope.$index, scope.row)" type="success">确认</el-button>
       </template>
     </el-table-column>
   </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      json1: {},
      json2: {}
    }
  },
  mounted () {
    this.initData()
  },
  computed: {
    table: {
      get () {
        var tt = []
        for (var index in this.json1) {
          tt.push({
            key: index,
            name: this.json2[index],
            value: this.json1[index]
          })
        }
        return tt
      },
      set () {}
    }
  },
  methods: {
    initData () {
      this.table = []
      this.$http.post(this.$domain.domain1 + 'electric-design/getEndPagedata').then((res) => {
        this.json1 = res.data
        delete this.json1.code
      }).catch((err) => {
        console.log(err)
      })
      this.$http.post(this.$domain.domain1 + 'electric-design/getDataFormatOfEndPage').then((res) => {
        this.json2 = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    change (index, row) {
      var json = {}
      json[row.key] = row.value
      this.$http.post(this.$domain.domain1 + 'electric-design/changeEndPage', json).then((res) => {
        if (res.data.result) {
          this.$message({
            type: 'success',
            message: `${row.name}修改成功`
          })
          this.initData()
        } else {
          this.$message({
            type: 'warning',
            message: `修改失败，原因${res.data.reason}`
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
