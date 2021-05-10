<template>
  <div :id="enterprisePie" style="width: 100%;" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'enterprisePie',
  props: {
    height: String
  },
  data () {
    return {
      enterprisePie: `map-${~~(Math.random() * 100000)}`,
      charts: null
    }
  },
  mounted () {
    this.charts = this.$echarts.init(document.getElementById(this.enterprisePie))
    this.createdPie()
  },
  methods: {
    createdPie () {
      const data = 200 // 数值大小
      const max = 500 // 满刻度大小
      const option = {
        color: ['#ff9600', '#ff9600', 'rgba(255,255,255,.2)'],
        title: [
          {
            text: '企业入住率',
            x: '10%',
            y: '80%',
            textStyle: {
              color: '#fff',
              fontSize: 18
            }
          },
          {
            text: '80%',
            x: '25%',
            y: '45%',
            textStyle: {
              color: '#ff9600',
              fontSize: 24
            }
          }
        ],
        series: [{
          type: 'pie',
          center: ['45%', '50%'],
          radius: ['70%', '90%'],
          hoverAnimation: false,
          startAngle: 260,
          itemStyle: {
            normal: {
              labelLine: {
                show: false
              }
            }
          },
          data: [
            {
              name: '',
              value: data,
              label: {
                show: false,
                position: 'center',
                color: '#ff9600',
                fontSize: 24,
                fontWeight: 'bold',
                formatter: function (o) {
                  return data
                }
              }
            },
            { // 画中间的图标
              name: '',
              value: 0,
              label: {
                rotate: 60,
                position: 'inside',
                width: 10,
                height: 10,
                padding: 12,
                verticalAlign: 'bottom',
                backgroundColor: '#ff9600',
                borderRadius: 20,

                borderWidth: 2,
                // borderColor: colorList[0],
                shadowColor: 'rgba(255,130,26,0.60)',
                shadowBlur: 10,
                shadowOffsetY: 4
              }
            },
            { // 画剩余的刻度圆环
              name: '',
              value: max - data,
              label: {
                labelLine: false,
                show: false
              }
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

<style scoped>

</style>
