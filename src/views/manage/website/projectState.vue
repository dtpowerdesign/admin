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
      table: 'projects',
      getDataFormat: 'electric-design/getDataFormatOfProject',
      changeTable: '/manage/project',
      nameExcel: '项目Excel表',
      name: '项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
