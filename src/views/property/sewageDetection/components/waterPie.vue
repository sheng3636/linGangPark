<template>
  <div :id="waterPie" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
import 'echarts-liquidfill/src/liquidFill.js'
export default {
  name: 'waterPie',
  props: {
    height: String
  },
  data () {
    return {
      waterPie: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.waterPie))
    this.createdWaterPie()
  },
  methods: {
    createdWaterPie () {
      const value = 0.2
      const data = [value, value, value]
      const option = {
        title: {
          text: (value * 100).toFixed(0) + '{a|mg/m³}',
          textStyle: {
            fontSize: 50,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#ffe037',
            rich: {
              a: {
                fontSize: 40,
                color: '#fff'
              }
            }
          },
          x: 'center',
          y: '35%'
        },
        graphic: [{
          type: 'group',
          left: 'center',
          top: '60%',
          children: [{
            type: 'text',
            z: 100,
            left: '10',
            top: 'middle',
            style: {
              fill: '#fff',
              text: '氨氮含量NH3-N',
              font: '20px Microsoft YaHei',
              fontSize: 20
            }
          }]
        }],
        series: [{
          type: 'liquidFill',
          radius: '100%',
          center: ['50%', '50%'],
          data: data,
          backgroundStyle: {
            color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0.5,
              y2: 1,
              colorStops: [{
                offset: 1,
                color: 'rgba(68, 145, 253, 0)'
              }, {
                offset: 0.5,
                color: 'rgba(68, 145, 253, .25)'
              }, {
                offset: 0,
                color: 'rgba(68, 145, 253, 1)'
              }],
              globalCoord: false
            }
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 1,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(69, 73, 240, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(69, 73, 240, .25)'
                }, {
                  offset: 1,
                  color: 'rgba(69, 73, 240, 1)'
                }],
                globalCoord: false
              },
              shadowBlur: 10,
              shadowColor: '#000'
            }
          },
          color: ['#00a1ec', '#004db2'],
          label: {
            normal: {
              formatter: ''
            }
          }
        }]
      }
      this.charts.clear()
      this.charts.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
