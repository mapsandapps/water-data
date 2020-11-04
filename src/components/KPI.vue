<template>
  <div class="kpi" :style="style">
    <div class="kpi__name">{{ statisticName }}</div>
    <div class="kpi__value">{{ value }}</div>
    <div class="kpi__date">{{ date }} {{ time }}</div>
  </div>
</template>

<script>
import { colors } from '../util.js'

export default {
  name: 'GenericData',
  props: {
    colorName: String,
    statisticName: String,
    value: String,
    dateTime: String
  },
  computed: {
    date() {
      return this.dateTime.split('T')[0]
    },
    style() {
      return {
        backgroundColor: colors[this.colorName]
      }
    },
    time() {
      return this.dateTime.split('T')[1].substring(0, 5)
    }
  }
}
</script>

<style scoped lang="scss">
.kpi {
  text-align: center;
}
.kpi__value {
  font-size: 40px;
}
</style>
