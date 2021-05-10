<template>
  <div class="header">
    <div class="header-center flex-container center">
      <div class="header-center-weather">
        <span class="header-center-weather-icon p-r-20">
          <img src="../../assets/images/tianqi/clound.png" alt class=" m-r-10" />
          晴天
        </span>
        <span class="header-center-time-line"></span>
        <span class="header-center-weather-icon p-l-20">22 °C</span>
      </div>
      <div class="header-center-title">数智园区数据可视化平台</div>
      <div class="header-center-time">
        <span class="p-r-40 ">{{dateYear}}</span>
        <span class="f-20 t-l">{{dateHH}}:</span>
        <span class="f-20 t-l p-r-20">{{dateMM}}</span>
        <span class="header-center-time-line"></span>
        <span class="f-20 p-l-30">{{weekDay}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      weather: {},
      dateYear: '',
      weekDay: '',
      dateHH: '00',
      dateMM: '00',
      dateSS: '00',
      title: '海湾镇城市运行管理平台',
      isSubName: false
    }
  },
  mounted () {
    this.getWeather()
    this.$nextTick(function () {
      setInterval(this.showTime, 1000)
    })
  },
  methods: {
    showTime () {
      const mydate = new Date()
      const arrWeek = ['星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六']
      let year = ''
      let month = ''
      let date = ''
      let hh = ''
      let mm = ''
      let ss = ''
      let week = ''
      year = '' + mydate.getFullYear()
      month +=
        (mydate.getMonth() + 1 < 10 ? '0' : '') +
        (mydate.getMonth() + 1)
      date += (mydate.getDate() < 10 ? '0' : '') + mydate.getDate()
      hh += (mydate.getHours() < 10 ? '0' : '') + mydate.getHours()
      mm += (mydate.getMinutes() < 10 ? '0' : '') + mydate.getMinutes()
      ss += (mydate.getSeconds() < 10 ? '0' : '') + mydate.getSeconds()
      week = arrWeek[mydate.getDay()]
      this.dateYear = year + '-' + month + '-' + date
      this.weekDay = week
      this.dateHH = hh
      this.dateMM = mm
      this.dateSS = ss
    },
    // 获取天气
    getWeather () {
      // AMap.plugin('AMap.Weather', () => {
      //   let Weather = new AMap.Weather()
      //   // 查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
      //   Weather.getLive('闵行区', (err, data) => {
      //     if (err) return false
      //     this.weather = data
      //     if (
      //       this.weather.weather === '阴' ||
      //       this.weather.weather === '多云'
      //     ) {
      //       this.weather.imgSrc =
      //         './static/images/tianqi/clound.png'
      //     } else if (this.weather.weather === '晴') {
      //       this.weather.imgSrc = './static/images/tianqi/sun.png'
      //     } else if (
      //       this.weather.weather === '小雨' ||
      //       this.weather.weather === '大雨 ' ||
      //       this.weather.weather === '中雨'
      //     ) {
      //       this.weather.imgSrc = './static/images/tianqi/rain.png'
      //     }
      //   })
      // })
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
