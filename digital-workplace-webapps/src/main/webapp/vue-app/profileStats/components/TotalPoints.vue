<template>
  <v-layout
    row
    wrap
    mx-0>
    <v-flex
      d-flex
      xs12>
      <v-layout
        row
        wrap
        mx-2
        align-start
        px-2>
        <v-flex
          d-flex
          xs12
          mt-n2
          justify-center>
          <div>
            <span class="pr-2 text-uppercase subtitle-2">{{ this.$t('homepage.profileStatus.totalPoints') }}</span>
          </div>
        </v-flex>
        <v-flex
          d-flex
          xs12
          mt-n6>
          <v-icon
            color="grey darken-2"
            size="20"
            @click="toProfileStats()">mdi-arrow-left</v-icon>
        </v-flex>
      </v-layout>
    </v-flex>
    <div style="margin: auto">
      <vue-apex-charts
        :options="donutChart.chartOptions"
        :series="donutChart.series"
        type="donut"/>
    </div>
  </v-layout>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
    Vue.use(VueApexCharts)
    Vue.component('apexchart', VueApexCharts)
    export default {
        components: { VueApexCharts },
        data() {
            return {
                donutChart: {
                    series: [44, 55, 49, 17,20],
                    chartOptions: {
                      legend: {
                        show: false
                      },
                        labels: ['Development', 'Feedback', 'Knowledge', 'Social','Teamwork'],
                        colors: ['rgb(31, 119, 180)', 'rgb(44, 160, 44)', 'rgb(214, 39, 40)', 'rgb(148, 103, 189)', 'rgb(255, 127, 14)'],
                      plotOptions: {
                        pie: {
                            size: 100,
                          donut: {
                            size: '50',
                            labels: {
                              show: true,
                              total: {
                                show: true
                              }
                            },
                          }
                        }
                      }
                    }
                }
            }
        },
      methods: {
        toProfileStats() {
          this.$emit('isProfileStats');
        }
      }
    }
</script>