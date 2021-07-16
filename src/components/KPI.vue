<template>
  <div class="py-20" :style="style">
    <div>{{ statisticName }}</div>
    <div class="text-5xl">{{ value }}</div>
    <div>{{ date }} {{ time }}</div>
  </div>
</template>

<script>
const colors = require('tailwindcss/colors')

export default {
  name: 'GenericData',
  props: {
    colorValue: String,
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
        backgroundColor: colors.blue[this.colorValue]
      }
    },
    time() {
      return this.dateTime.split('T')[1].substring(0, 5)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
