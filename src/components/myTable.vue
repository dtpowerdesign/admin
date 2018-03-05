<template>
  <div>
    <el-table :data="table" style="width: 100%">
      <el-table-column label="表头显示的内容">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="表头显示的内容" placement="top-start">
          <el-input v-model="scope.row.title"></el-input>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="键值名称，英文或数字随意组合(禁止修改)">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="键值名称(禁止修改)" placement="top-start">
          <el-input v-model="scope.row.key" :disabled="true"></el-input>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="dataType" label="键值得数据类型(此处最好不要随便改动)">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="键值得数据类型(此处最好不要随便改动)" placement="top-start">
          <el-select v-model="scope.row.dataType">
            <el-option v-for="(i, j) in mySqlDataType" :key="j" :label="i" :value="i"></el-option>
          </el-select>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="键值得说明">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="键值得说明" placement="top-start">
          <el-input v-model="scope.row.explain"></el-input>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column  label="是否为必填项">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="是否为必填项" placement="top-start">
            <el-switch style="display: block" v-model="scope.row.requied" active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否"></el-switch>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="show" label="是否公开显示出来">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="是否为公开显示出来" placement="top-start">
            <el-switch style="display: block" v-model="scope.row.show" active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否"></el-switch>
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
    <span style="color:red">输入新的key(key一旦添加就无法修改)</span>
    <el-input v-model="newKey" style="width:30%"></el-input>
    <el-button type="primary" @click="add()">添加新的表头<i class="icon iconfont icon-jia"></i></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: [],
      mySqlDataType: ['decimal(64)', 'varchar(255)', 'datetime', 'int(20)'],
      newKey: 'test'
    }
  },
  props: ['msg'],
  mounted () {
    this.initData()
  },
  watch: {
    msg () {
      this.initData()
    }
  },
  methods: {
    initData () {
      this.table = []
      for (var Key in this.msg) {
        this.table.push({
          key: this.msg[Key].key,
          dataType: this.msg[Key].dataType,
          explain: this.msg[Key].explain,
          require: this.msg[Key].require,
          show: this.msg[Key].show,
          title: this.msg[Key].title
        })
      }
    },
    handleEdit (index, row) {
      if (this.msg.hasOwnProperty(row.key)) {
        if (this.$parent.type === 'contract') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changeContractTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'cuser') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changeCuserTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'puser') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changePuserTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'event') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changeEventTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'invoice') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changeInvoiceTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'project') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changeProjectTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'totalMsg') {
          this.$http.post(this.$domain.domain1 + 'electric-design/changeTotalMsgTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `修改失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      } else {
        if (this.$parent.type === 'contract') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addContractTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'cuser') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addCuserTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'puser') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addPuserTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'event') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addEventTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'invoice') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addInvoiceTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'project') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addProjectTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        if (this.$parent.type === 'totalMsg') {
          this.$http.post(this.$domain.domain1 + 'electric-design/addTotalMsgTableTitle', {
            'key': row.key,
            'title': row.title,
            'explain': row.explain,
            'dataType': row.dataType,
            'requied': row.requied,
            'show': row.show
          }).then((res) => {
            if (res.data.result) {
              this.$message({
                type: 'success',
                message: '添加成功'
              })
              this.$parent.initData()
            } else {
              this.$message({
                type: 'warning',
                message: `添加失败,失败原因:${res.data.reason}`
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    },
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (!this.msg.hasOwnProperty(row.key)) {
          this.message({
            type: 'warning',
            message: '数据库里没有此项，可能已经被删除了还没有刷新或者新增加的还未确定'
          })
        } else {
          if (this.$parent.type === 'contract') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delContractTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
          if (this.$parent.type === 'cuser') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delCuserTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
          if (this.$parent.type === 'puser') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delPuserTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
          if (this.$parent.type === 'event') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delEventTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
          if (this.$parent.type === 'invoice') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delInvoiceTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
          if (this.$parent.type === 'project') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delProjectTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
          if (this.$parent.type === 'totalMsg') {
            this.$http.post(this.$domain.domain1 + 'electric-design/delTotalMsgTableTitle', {
              'columnName': row.key
            }).then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
                this.$parent.initData()
              } else {
                this.$message({
                  type: 'warning',
                  message: `删除失败,失败原因:${res.data.reason}`
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          }
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    add () {
      this.table.push({
        key: this.newKey,
        dataType: 'varchar(255)',
        explain: '在此添加新的解释',
        require: false,
        show: true,
        title: '在此添加新的表头'
      })
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
