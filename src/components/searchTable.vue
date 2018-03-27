<template>
  <div class="searchTable">
      <div style="display:flex;justify-content:space-around;margin:1rem auto" v-loading="loadingTable">
        <el-input :placeholder="$parent.name+'查询'" @keyup.enter.native="mySearch()" v-model="search" style="width:90%">
        <i slot="prefix" class="el-input__icon el-icon-search" @click="mySearch()" style="font-size:1.5rem" ></i>
        </el-input>
        <el-button style="width:10%" type="success" @click="mySearch()">搜索</el-button>
      </div>
      <div style="display:flex;justify-content:flex-end">
            <el-button size="small" style='margin-right:20px;' type="warning" icon="document" @click="$router.push($parent.changeTable)" >表头编辑</el-button>
            <el-button size="small" style='margin-right:20px;' type="primary" icon="document" @click="handleDownload" >导出excel</el-button>
      </div>      
      <el-table :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width:100%" stripe ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange" v-loading="downloadLoading">
        <el-table-column type="selection"></el-table-column>
        <el-table-column v-for="(i, j) in json" :key="j" :prop="j" :label="i.title" :fixed="j==='name'?'left':false"></el-table-column>
      </el-table>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 5, 10, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.length">
      </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      pagesize: 5,
      loadingTable: true,
      downloadLoading: false,
      multipleSelection: [],
      search: '',
      data: [],
      jsonAll: {},
      json: {}
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + this.$parent.getDataFormat).then((res) => {
        this.jsonAll = res.data
        this.json = {}
        for (var i in this.jsonAll) {
          if (this.jsonAll[i].show) {
            this.$set(this.json, i, this.jsonAll[i])
          }
        }
        this.$http.post(this.$domain.domain1 + 'electric-design/searchTableByValue', {'table': this.$parent.table, 'value': ''})
          .then((res) => {
            // console.log(res.data)
            this.data = []
            if (res.data !== 0) {
              res.data.forEach((el, index) => {
                var obj = {}
                for (var i in this.jsonAll) {
                  if (Array.isArray(el[i]) && (i !== 'processRequirements')) {
                    obj[i] = el[i].concat().join(',')
                  } else if (i.match(/(Time)$/) && !i.match(/^(all)/) && el[i] !== '暂无数据') {
                    el[i].year = el[i].year || 0
                    el[i].month = el[i].month || 0
                    el[i].date = el[i].date || 0
                    obj[i] = [].concat((el[i].year + 1900), (el[i].month + 1), el[i].date).join('/')
                  } else {
                    obj[i] = el[i]
                  }
                }
                this.data.push(obj)
              })
            }
            this.loadingTable = false
          }).catch((err) => {
            console.log(err)
          })
      }).catch((err) => {
        console.log(err)
      })
    },
    mySearch () {
      this.$http.post(this.$domain.domain1 + this.$parent.getDataFormat).then((res) => {
        this.jsonAll = res.data
        this.json = {}
        for (var i in this.jsonAll) {
          if (this.jsonAll[i].show) {
            this.$set(this.json, i, this.jsonAll[i])
          }
        }
        this.$http.post(this.$domain.domain1 + 'electric-design/searchTableByValue', {'table': this.$parent.table, 'value': this.search})
          .then((res) => {
            // console.log(res.data)
            this.data = []
            if (res.data !== 0) {
              res.data.forEach((el, index) => {
                var obj = {}
                for (var i in this.jsonAll) {
                  if (Array.isArray(el[i]) && (i !== 'processRequirements')) {
                    obj[i] = el[i].concat().join(',')
                  } else if (i.match(/(Time)$/) && !i.match(/^(all)/) && el[i] !== '暂无数据') {
                    el[i].year = el[i].year || 0
                    el[i].month = el[i].month || 0
                    el[i].date = el[i].date || 0
                    obj[i] = [].concat((el[i].year + 1900), (el[i].month + 1), el[i].date).join('/')
                  } else {
                    obj[i] = el[i]
                  }
                }
                this.data.push(obj)
              })
            }
            this.loadingTable = false
          }).catch((err) => {
            console.log(err)
          })
      }).catch((err) => {
        console.log(err)
      })
    },
    handleDownload () {
      var xxx = this.multipleSelection
      var t1 = []
      for (var i in this.json) {
        t1.push(this.json[i].title)
      }
      var t2 = []
      for (var j in this.json) {
        t2.push(this.json[j].key)
      }
      if (this.multipleSelection.length !== 0) {
        this.downloadLoading = true
        require.ensure([], () => {
          // eslint-disable-next-line
          const { export_json_to_excel } = require('@/vendor/Export2Excel')
          const tHeader = t1
          const filterVal = t2
          const list = xxx
          const data = this.formatJson(filterVal, list)
          export_json_to_excel(tHeader, data, this.$parent.nameExcel)
          this.downloadLoading = false
        })
      } else {
        this.$message({
          showClose: true,
          message: '你还未选择哦',
          type: 'warning'
        })
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handleSizeChange (size) {
      this.pagesize = size
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchTable{
      width: 90%;
    margin: auto;
}
</style>
