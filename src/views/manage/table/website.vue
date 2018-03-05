<template>
  <div>
   website
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
      type: 'totalMsg'
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getDataFormatOfTotalMsg').then((res) => {
        this.data = res.data
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
