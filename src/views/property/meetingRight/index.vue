<template>
<div class="main-index right-index">
  <Title title="会议系统"></Title>
  <div class="m-t-60 p-l-70">
    <subTitle sub-title="会议室管理"></subTitle>
    <meetingPie :style="{backgroundImage:'url(' + item.piePatternSrc+ ')'}" class="bg" height="200px" v-for="(item,index) in echartsData" :key="index" :data="item"></meetingPie>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import meetingPie from './components/meetingPie'
export default {
  name: 'index',
  components: { Title, subTitle, meetingPie },
  data () {
    return {
      echartsData: [
        {
          piePatternSrc: require('../../../assets/images/echarts-blue.png'),
          text: '总会议室数量',
          subText: '48',
          color: ['#15dffb', '#15dffb', '#18456f'],
          data: 48,
          maxData: 100,
          x: '33.5%',
          y: '43%',
          x1: '37%',
          y1: '20%'
        },
        {
          piePatternSrc: require('../../../assets/images/echarts-green.png'),
          text: '使用数量',
          subText: '20',
          color: ['#2dff68', '#2dff68', '#18456f'],
          data: 20,
          maxData: 100,
          x: '36%',
          y: '46%',
          x1: '37%',
          y1: '23%'
        },
        {
          piePatternSrc: require('../../../assets/images/echarts-orange.png'),
          text: '闲置数量',
          subText: '20',
          color: ['#fd8815', '#fd8815', '#18456f'],
          data: 20,
          maxData: 100,
          x: '36%',
          y: '46%',
          x1: '37%',
          y1: '23%'
        },
        {
          piePatternSrc: require('../../../assets/images/echarts-violet.png'),
          text: '预定数量',
          subText: '18',
          color: ['#f25eff', '#f25eff', '#18456f'],
          data: 18,
          maxData: 100,
          x: '36%',
          y: '46%',
          x1: '37%',
          y1: '23%'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
