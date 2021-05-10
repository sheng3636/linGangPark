<template>
<div :id="lineChart" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>

export default {
  name: 'carRoadLineChart',
  props: {
    height: String
  },
  data () {
    return {
      lineChart: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.lineChart))
    this.createdChart()
  },
  methods: {
    contains (arr, dst) {
      let i = arr.length
      while ((i -= 1)) {
        if (arr[i] === dst) {
          return i
        }
      }
      return false
    },
    createdChart () {
      const than = this
      const attaData = []
      const attaName = []
      const topName = []
      const salvProMax = []
      const attackSourcesColor1 = ['#ff6c00', '#ffffff', '#ffde00']
      const data1 = [
        {
          code: '1',
          stock: '1',
          fundPost: '500'
        },
        {
          code: '1',
          stock: '2',
          fundPost: '400'
        },
        {
          code: '1',
          stock: '3',
          fundPost: '300'
        },
        {
          code: '1',
          stock: '4',
          fundPost: '100'
        },
        {
          code: '1',
          stock: '5',
          fundPost: '100'
        }
      ]
      data1.forEach((it, index) => {
        salvProMax[index] = 1000
        attaData[index] = it.fundPost
        attaName[index] = it.stock
        topName[index] = `${it.code}`
      })
      const option = {
        color: ['#00c0ff'],
        tooltip: {
          show: false,
          backgroundColor: 'rgba(3,169,244, 0.5)', // 背景颜色（此时为默认色）
          textStyle: {
            fontSize: 16
          }
        },
        grid: {
          left: '0',
          right: '',
          bottom: '',
          top: '',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisPointer: {
              label: {
                show: true
              }
            },
            padding: [0, 0, 0, 0],
            data: attaName,
            axisLabel: {
              margin: 30,
              fontSize: 10,
              align: 'left',
              padding: [2, 0, 0, 0],
              color: '#000',
              rich: {
                nt1: {
                  color: '#000',
                  backgroundColor: attackSourcesColor1[0],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  lineHeight: '5',
                  padding: [0, 1, 2, 1]
                  // padding:[0,0,2,0],
                },
                nt2: {
                  color: '#000',
                  backgroundColor: attackSourcesColor1[1],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  padding: [0, 1, 1, 1]
                },
                nt3: {
                  color: '#000',
                  backgroundColor: attackSourcesColor1[2],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                },
                nt: {
                  color: '#fff',
                  backgroundColor: attackSourcesColor1[3],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  padding: [0, 1, 2, 1],
                  lineHeight: 5
                }
              },
              formatter: function (value, index) {
                index = than.contains(attaName, value) + 1
                if (index - 1 < 3) {
                  return ['{nt' + index + '|' + index + '}'].join('\n')
                } else {
                  return ['{nt|' + index + '}'].join('\n')
                }
              }
            }
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: false,
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: ''
              }
            },
            data: this.attackSourcesDataFmt(attaName)
          },
          { // 名称
            type: 'category',
            offset: -10,
            position: 'left',
            axisLine: {
              show: false
            },
            inverse: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: ['#fff'],
              align: 'left',
              verticalAlign: 'bottom',
              lineHeight: 32,
              fontSize: 10
            },
            data: topName
          }
        ],
        series: [
          {
            zlevel: 1,
            name: '个人所得(亿元)',
            type: 'bar',
            barWidth: '8px',
            animationDuration: 1500,
            data: this.attackSourcesDataFmt(attaData),
            align: 'center',
            itemStyle: {
              normal: {
                barBorderRadius: 10
              }
            },
            label: {
              show: true,
              fontSize: 12,
              color: '#00c0ff',
              formatter: '{c}万',
              textBorderWidth: 2,
              padding: [2, 0, 25, 50]
            }
          },
          {
            name: '个人所得(亿元)',
            type: 'bar',
            barWidth: 8,
            barGap: '-100%',
            margin: '20',
            data: salvProMax,
            textStyle: {
              // 图例文字的样式
              fontSize: 10,
              color: '#fff'
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.2)',
                fontSize: 10,
                barBorderRadius: 30
              }
            }
          }
        ]
      }
      this.charts.clear()
      this.charts.setOption(option)
    },
    attackSourcesDataFmt (sData) {
      const sss = []
      const attackSourcesColor = ['#00c0ff', '#00c0ff', '#00c0ff']
      sData.forEach(function (item, i) {
        const itemStyle = {
          color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
        }
        sss.push({
          value: item,
          itemStyle: itemStyle
        })
      })
      return sss
    }
  }
}
</script>

<style scoped lang="scss">

</style>
