<template>
  <div :id="deviceOnlinePie" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'deviceOnlinePie',
  props: {
    height: String
  },
  data () {
    return {
      deviceOnlinePie: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.deviceOnlinePie))
    this.createdPieChart()
  },
  methods: {
    createdPieChart () {
      const option = {
        title: [{
          text: '634台',
          x: '60%',
          top: '30%',
          textStyle: {
            color: '#fff',
            fontSize: 50
          }
        }, {
          text: '设备在线',
          x: '65%',
          top: '58%',
          textStyle: {
            color: '#fff',
            fontSize: 20
          }
        }, {
          text: '50%',
          x: '25%',
          top: '40%',
          textStyle: {
            fontSize: '36',
            color: '#fff'
          }
        }],
        polar: {
          radius: ['50%', '60%'],
          center: ['35%', '50%']
        },
        angleAxis: {
          max: 100,
          show: false
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false

          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: '#73808c'
            },
            data: [30],
            coordinateSystem: 'polar',

            itemStyle: {
              normal: {
                color: '#f39800'
              }
            }

          }
        ]
      }
      this.charts.clear()
      this.charts.setOption(option)
    }
  }
}
</script>
