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
      type: 'puser',
      name: '个人用户',
      search: '/manage/puserState'
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getDataFormatOfPuser').then((res) => {
        this.data = res.data
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
