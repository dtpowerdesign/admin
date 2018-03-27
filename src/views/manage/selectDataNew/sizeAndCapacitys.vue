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
      type: 'sizeAndCapacitys',
      name: '规模单位'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
