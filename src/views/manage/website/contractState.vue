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
      table: 'contracts',
      getDataFormat: 'electric-design/getDataFormatOfContract',
      changeTable: '/manage/contract',
      nameExcel: '合同Excel表',
      name: '合同'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
