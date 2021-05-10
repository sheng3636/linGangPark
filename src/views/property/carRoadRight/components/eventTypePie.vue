<template>
<div :id="eventTypePie" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'eventTypePie',
  props: {
    height: String
  },
  data () {
    return {
      eventTypePie: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.eventTypePie))
    this.createdPie()
  },
  methods: {
    createdPie () {
      const colorList = ['#00a0e9', '#1bc85e', '#ce5a60', '#f39800']
      const option = {
        legend: {
          icon: 'roundRect',
          itemWidth: 26,
          itemHeight: 7,
          itemGap: 25,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['22%', '45%'],
          clockwise: true,
          avoidLabelOverlap: true,
          hoverOffset: 15,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}:{c} {d}%}',
            rich: {
              a: {
                color: '#fff',
                fontSize: 12,
                padding: [-30, 15, -20, 15]
              }
            }
          },
          labelLine: {
            normal: {
              length: 10,
              length2: 10,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            }
          },
          data: [{
            name: '酒驾',
            value: 1.45
          }, {
            name: '闯红灯',
            value: 2.93
          }, {
            name: '追尾',
            value: 3.15
          }, {
            name: '撞伤行人',
            value: 4.78
          }
          ]
        }]
      }
      this.charts.clear()
      this.charts.setOption(option)
    }
  }
}
</script>
