<template>
  <div>
   types
   <selectData :msg="types"></selectData>
  </div>
</template>

<script>
import selectData from '@/components/selectData'
export default {
  components: {selectData},
  data () {
    return {
      name: '类型',
      code: 'types',
      types: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get(this.$domain.domain1 + 'electric-design/getTypeMajors').then((res) => {
        this.types = res.data.types
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
