<template>
  <div>
   event
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
      type: 'event'
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.post(this.$domain.domain1 + 'electric-design/getDataFormatOfEvent').then((res) => {
        this.data = res.data
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
