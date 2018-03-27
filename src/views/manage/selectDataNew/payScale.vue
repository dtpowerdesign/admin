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
      type: 'payScale',
      name: '付款比例'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
