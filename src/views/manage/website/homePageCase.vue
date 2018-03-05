<template>
  <div>
    <el-table :data="table" style="width: 100%">
      <el-table-column label="案例名称">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="表头显示的内容" placement="top-start">
          <el-input v-model="scope.row.name"></el-input>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="案例展示图片路径">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="表头显示的内容" placement="top-start">
          <el-input v-model="scope.row.image"></el-input>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="案例来源名称">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="表头显示的内容" placement="top-start">
          <el-input v-model="scope.row.source"></el-input>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">确认</el-button>
          <el-button size="mini" type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
    <el-button type="primary" @click="add()">添加新的案例<i class="icon iconfont icon-jia"></i></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getHomepageCases').then((res) => {
        this.table = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    add () {
      this.table.push({
        name: '',
        image: '',
        source: ''
      })
    },
    handleEdit (index, row) {
      if (row.code) {
        this.$http.post(this.$domain.domain1 + 'electric-design/changeHomepageCase', {
          'code': '1',
          'data': {
            'code': row.code,
            'name': row.name,
            'source': row.source,
            'image': row.image
          }
        }).then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: `平台案例${row.name}修改成功`
            })
            this.initData()
          } else {
            this.$message({
              type: 'warning',
              message: `平台案例${row.name}修改失败,原因：${res.data.reason}`
            })
          }
        }).catch((err) => { console.log(err) })
      } else {
        this.$http.post(this.$domain.domain1 + 'electric-design/addHomepageCase', {
          'name': row.name,
          'source': row.source,
          'image': row.image
        }).then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: `平台案例${row.name}添加成功`
            })
            this.initData()
          } else {
            this.$message({
              type: 'warning',
              message: `平台案例${row.name}添加失败,原因：${res.data.reason}`
            })
          }
        }).catch((err) => { console.log(err) })
      }
    },
    handleDelete (index, row) {
      if (row.code) {
        this.$http.post(this.$domain.domain1 + 'electric-design/delHomepageCase ', {
          'code': row.code
        }).then((res) => {
          if (res.data.result) {
            this.$message({
              type: 'success',
              message: `平台案例${row.name}删除成功`
            })
            this.initData()
          } else {
            this.$message({
              type: 'warning',
              message: `平台案例删除失败,原因：${res.data.reason}`
            })
          }
        }).catch((err) => { console.log(err) })
      } else {
        this.$router.go(0)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon{
  font-size:1.5rem
}
</style>
