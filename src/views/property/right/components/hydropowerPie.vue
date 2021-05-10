<template>
  <div :id="hydropowerPie" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'hydropowerPie',
  props: {
    height: String
  },
  data () {
    return {
      hydropowerPie: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.hydropowerPie))
    this.initPieEcharts()
  },
  methods: {
    initPieEcharts () {
      let colors = '#15fefe'
      const option = {
        legend: {
          show: true,
          icon: 'rect',
          top: 'center',
          left: '55%',
          itemWidth: 12,
          itemHeight: 12,
          data: ['水费账单', '电费账单', '房租账单'],
          width: 20,
          padding: [0, 10],
          itemGap: 25,
          formatter: function (name) {
            const data = option.series
            let total = 0
            let tarValue = 0
            let p = ''
            data.forEach(item => {
              for (let i = 0, l = item.data.length; i < l; i++) {
                total += item.data[i].value
                if (item.data[i].name === name) {
                  tarValue = item.data[i].value
                }
              }
              p = total === 0 ? 0 : (tarValue / total * 100).toFixed(2)
            })
            if (name === '水费账单') {
              colors = '#15fefe'
            } else if (name === '电费账单') {
              colors = '#158efe'
            } else {
              colors = '#42ffa1'
            }
            return '{title|' + name + '}{value|' + ' ' + p + '}  {value|个}'
          },
          textStyle: {
            rich: {
              title: {
                color: '#fff',
                fontSize: 16
              },
              value: {
                fontSize: 18,
                lineHeight: 20,
                color: colors
              }
            }
          }
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{a}<br>{b}:{c}({d}%)'
        },
        color: ['#15fefe', '#158efe', '#42ffa1'],
        series: [
          {
            name: '水费账单',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            radius: ['70%', '75%'],
            center: ['30%', '55%'],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [{
              value: 100,
              name: '水费账单'
            }, {
              value: 100 - 60,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }]
          },
          {
            name: '电费账单',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            radius: ['60%', '65%'],
            center: ['30%', '55%'],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [{
              value: 100,
              name: '电费账单'
            }, {
              value: 100 - 60,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }]
          },
          {
            name: '房租账单',
            type: 'pie',
            silent: true,
            startAngle: 110,
            z: 1,
            clockWise: false, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            radius: ['50%', '55%'],
            center: ['30%', '55%'],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [{
              value: 20,
              name: '房租账单'
            }, {
              value: 100 - 60,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }]
          },
          {
            type: 'pie',
            name: '外层细圆环',
            center: ['30%', '55%'],
            radius: ['80%', '81%'],
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
      }
      this.charts.clear()
      this.charts.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
