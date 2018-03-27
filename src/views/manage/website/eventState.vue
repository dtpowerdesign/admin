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
      table: 'events',
      getDataFormat: 'electric-design/getDataFormatOfEvent',
      changeTable: '/manage/event',
      nameExcel: '事件Excel表',
      name: '事件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
