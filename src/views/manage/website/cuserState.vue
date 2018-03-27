<template>
  <div>
   <search></search>
  </div>
</template>

<script>
import search from '@/components/searchTable'
export default {
  components: {search},
  data () {
    return {
      table: 'cusers',
      getDataFormat: 'electric-design/getDataFormatOfCuser',
      changeTable: '/manage/cuser',
      nameExcel: '企业用户Excel表',
      name: '企业'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
