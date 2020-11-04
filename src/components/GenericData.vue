<template>
  <div class="generic-data">
    <div class="kpis">
      <KPI
        colorName="blue5"
        :dateTime="minValue.dateTime"
        statisticName="Min over last 7 days"
        :value="minValue.value"
      />
      <KPI
        :colorName="color"
        :dateTime="latestValue.dateTime"
        statisticName="Current"
        :value="latestValue.value"
      />
      <KPI
        colorName="blue80"
        :dateTime="maxValue.dateTime"
        statisticName="Max over last 7 days"
        :value="maxValue.value"
      />
    </div>
    <div class="spark-chart">
      <canvas :id="chartName" width="200" height="70" />
      <div class="spark-chart__caption">Last 7 days</div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import KPI from '@/components/KPI.vue'
import { colors, getColor } from '../util.js'

import { last, map, maxBy, minBy, toNumber } from 'lodash'

export default {
  name: 'GenericData',
  components: {
    KPI
  },
  props: {
    data: Object
  },
  computed: {
    chartLabels() {
      return map(this.values, 'dateTime')
    },
    chartName() {
      return this.data.variable.variableCode[0].variableID
    },
    chartValues() {
      console.log(map(this.values, 'value'))
      return map(this.values, 'value')
    },
    color() {
      return getColor(this.latestValue.value, this.minValue.value, this.maxValue.value)
    },
    latestValue() {
      return last(this.values)
    },
    maxValue() {
      return maxBy(this.values, value => {
        return toNumber(value.value)
      })
    },
    minValue() {
      return minBy(this.values, value => {
        return toNumber(value.value)
      })
    },
    values() {
      return last(this.data.values).value
    }
  },
  methods: {
    drawChart() {
      const ctx = document.getElementById(this.chartName).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [
            {
              data: this.chartValues
            }
          ]
        },
        options: {
          responsive: false,
          legend: {
            display: false
          },
          elements: {
            line: {
              backgroundColor: colors.blue5,
              borderColor: colors.blue100,
              borderWidth: 1
            },
            point: {
              radius: 0
            }
          },
          tooltips: {
            enabled: false
          },
          scales: {
            yAxes: [
              {
                display: false
              }
            ],
            xAxes: [
              {
                display: false
              }
            ]
          }
        }
      })
    }
  },
  mounted: function() {
    this.drawChart()
  }
}
</script>

<style scoped lang="scss">
.kpis {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.spark-chart {
  margin: 0 auto;
}

.spark-chart__caption {
  font-size: 12px;
}

canvas {
  display: inline-block!important;
}
</style>
