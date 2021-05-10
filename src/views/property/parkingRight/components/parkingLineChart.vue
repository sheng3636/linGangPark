<template>
  <div :id="parkingLineChart" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'parkingLineChart',
  props: {
    height: String
  },
  data () {
    return {
      parkingLineChart: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.parkingLineChart))
    this.createdLineChart()
  },
  methods: {
    createdLineChart () {
      const color = ['#00aeef', '#ffb400']
      const option = {

        grid: {
          left: '0',
          right: '5%',
          bottom: '5%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16,
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: ['已用停车位', '剩余停车位']
        }],
        series: [{
          name: '已用停车位',
          type: 'bar',
          barGap: 0,
          barCategoryGap: 0,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: function (params) {
                return color[params.dataIndex]
              }
            }
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              fontSize: 14,
              color: '#84f2ff'
            }
          },
          barWidth: 10,
          data: [50, 170]
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
