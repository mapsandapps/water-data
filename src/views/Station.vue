<template>
  <div class="station">
    <div>Site code: {{ siteCode }}</div>
    <div><a :href="`https://waterdata.usgs.gov/monitoring-location/${$route.params.id}`" target="_blank">View on USGS</a></div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div>
        Site name: {{ sourceInfo.siteName }}
      </div>
      <div
        v-for="data in info"
        v-bind:key="data.variable.variableCode.variableID"
      >
        <div class="station__variable-name">
          {{ data.variable.variableDescription }}
        </div>
        <GenericData
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GenericData from '@/components/GenericData.vue'

import axios from 'axios'

export default {
  name: 'Station',
  components: {
    GenericData
  },
  data () {
    return {
      info: [],
      loading: true
    }
  },
  computed: {
    siteCode() {
      return this.$route.params.id
    },
    sourceInfo() {
      return this.info[0].sourceInfo
    }
  },
  methods: {
    getData(stationId) {
      axios
        .get(`https://waterservices.usgs.gov/nwis/iv/?sites=${stationId}&period=P7D&format=json`)
        .then(response => (this.info = response.data.value.timeSeries))
        .finally(() => this.loading = false)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.getData(this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">
.station__variable-name {
  font-size: 24px;
  font-weight: 700;
  padding-top: 48px;
}
</style>
