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
      table: 'invoices',
      getDataFormat: 'electric-design/getDataFormatOfInvoice',
      changeTable: '/manage/invoice',
      nameExcel: '账单Excel表',
      name: '账单'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
