<template>
  <div>
   categorys
   <selectData :msg="categorys"></selectData>
  </div>
</template>

<script>
import selectData from '@/components/selectData'
export default {
  components: {selectData},
  data () {
    return {
      name: '类别',
      code: 'categorys',
      categorys: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get(this.$domain.domain1 + 'electric-design/getTypeMajors').then((res) => {
        this.categorys = res.data.categorys
      }).catch((err) => {
        console.log(err)
        this.$message({showClose: true,
          message: '网络连接错误',
          type: 'error'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
