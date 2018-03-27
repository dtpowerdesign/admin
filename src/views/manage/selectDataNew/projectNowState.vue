<template>
  <div>
   <selectDataNew></selectDataNew>
  </div>
</template>

<script>
import selectDataNew from '@/components/selectDataNew'
export default {
  components: {selectDataNew},
  data () {
    return {
      type: 'projectNowState',
      name: '项目目前状态'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
