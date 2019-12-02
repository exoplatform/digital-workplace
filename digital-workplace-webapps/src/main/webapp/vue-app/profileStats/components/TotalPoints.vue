<template>
  <v-layout
    row
    wrap
    mx-0>
    <v-flex
      d-flex
      xs12
      my-4>
      <v-layout
        row
        wrap
        mx-2
        align-start
        px-2>
        <v-flex
          d-flex
          xs1>
          <v-icon
            color="grey darken-2"
            size="20"
            @click="toProfileStats()">mdi-arrow-left</v-icon>
        </v-flex>
        <v-flex
          d-flex
          xs11
          justify-center>
          <div>
            <span class="pr-6 text-uppercase subtitle-2">{{ this.$t('homepage.profileStatus.totalPoints') }}</span>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <div style="margin: auto">
      <v-chart :options="option" style="width: 300px; height: 220px"/>
    </div>
  </v-layout>
</template>

<script>
  import ECharts from 'vue-echarts';
  import 'echarts/lib/chart/pie';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/graphic';
  
  export default {
    components: {
      'v-chart': ECharts
    },
    data() {
      return {         
        option : {
          tooltip : {
            trigger: 'item',
            formatter: "{b} : {c}"
          },
          graphic:{
            type:'text',
            left:'center',
            top:'center',
            style: {
              text: `Total\n${1500}`,
              textAlign: 'center',
              font: 'bolder 16px cursive',
              fill:'#4d5466',
              width: 30,
              height: 30
            }
            },
          series : [
            {
              type: 'pie',
              radius: ['45%', '88%'],
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter:"{d}%",
                },
                  
              },
              data:[
                {value:335, name:'Development',itemStyle: {color: 'rgb(31, 119, 180)'},},
                {value:310, name:'Feedback',itemStyle: {color: 'rgb(44, 160, 44)'},},
                {value:234, name:'Knowledge',itemStyle: {color: 'rgb(214, 39, 40)'},},
                {value:200, name:'Social',itemStyle: {color: 'rgb(148, 103, 189)'},},
                {value:500, name:'Teamwork',itemStyle: {color: 'rgb(255, 127, 14)'},}
              ],
            }, 
          ]
        }
      };
    },
      methods: {
        toProfileStats() {
          this.$emit('isProfileStats');
        }
      }
    }
</script>