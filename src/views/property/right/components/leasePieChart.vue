<template>
  <div :id="pieCharts" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'leasePieChart',
  props: {
    height: String
  },
  data () {
    return {
      pieCharts: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.pieCharts))
    this.initEcharts()
  },
  methods: {
    initEcharts () {
      this.charts.setOption({
        title: {
          text: 12 + '%',
          x: '20%',
          y: 'center',
          textStyle: {
            fontSize: 28,
            color: '#34fff8'
          }
        },
        series: [
          {
            name: '当月任务故障率',
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['60%', '68%'],
            silent: true,
            clockwise: true,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 60,
                name: '',
                itemStyle: {
                  normal: { // 颜色渐变
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        { offset: 0, color: '#a7fffc' },
                        { offset: 1, color: '#34fff8' }
                      ]
                    )
                  }
                }
              },
              {
                value: 100 - 60,
                name: '',
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
              }
            ]
          },
          {
            name: '',
            type: 'gauge',
            radius: '68%',
            center: ['40%', '50%'],
            startAngle: 0,
            endAngle: 340,
            splitNumber: 20,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: '12%',
              lineStyle: {
                width: 2,
                color: '#000'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 100,
                name: ''
              }
            ]
          },
          {
            // 最内层
            name: '',
            type: 'pie',
            hoverAnimation: false,
            radius: '69%',
            center: ['40%', '50%'],
            labelLine: {
              normal: {
                show: false
              }
            },
            z: -1,
            data: [{
              // 总数
              value: 100,
              name: '',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.RadialGradient(
                    0.5,
                    0.5,
                    0.99,
                    [{
                      offset: 0,
                      color: 'rgba(0, 0, 0, 0)'
                    }, {
                      offset: 1,
                      color: '#1ffcff'
                    }
                    ],
                    false
                  )
                }
              }
            }]
          },
          {
            type: 'pie',
            name: '外层细圆环',
            center: ['40%', '50%'],
            radius: ['71%', '72%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                width: 1,
                color: '#00FFFF'
              }
            },
            label: {
              show: false
            },
            data: [100]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
