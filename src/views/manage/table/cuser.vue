<template>
  <div>
   cuser
   <myTable :msg="data"></myTable>
  </div>
</template>

<script>
import myTable from '@/components/myTable'
export default {
  components: {myTable},
  data () {
    return {
      data: {},
      type: 'cuser',
      name: '企业用户',
      search: '/manage/cuserState'
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getDataFormatOfCuser').then((res) => {
        this.data = res.data
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
