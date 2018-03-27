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
      table: 'pusers',
      getDataFormat: 'electric-design/getDataFormatOfPuser',
      changeTable: '/manage/puser',
      nameExcel: '个人用户Excel表',
      name: '个人用户'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
