<template>
<div class="main-index right-index parking-right">
  <Title title="停车管理" />
  <div class="p-l-35 m-t-45 p-r-10">
    <subTitle sub-title="车位管理" class="m-b-25" />
    <div class="flex-container start">
      <i class="iconfont icontingcheguanli f-70 c-blue_cyan p-r-35"></i>
      <div class="">
        <p class="f-16 c-fff parking-right-title">停车位总数</p>
        <p class="f-32 parking-right-color m-t-25">240</p>
      </div>
    </div>
    <parkingLineChart height="100px"></parkingLineChart>
    <subTitle sub-title="停车缴费" style="margin-bottom: 18px" />
    <parkingList :parkDataList="parkDataList" />
  </div>

</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import parkingLineChart from './components/parkingLineChart'
import parkingList from './components/parkingList'
export default {
  name: 'index',
  components: {
    Title,
    subTitle,
    parkingLineChart,
    parkingList
  },
  data () {
    return {
      parkDataList: [
        {
          type: 1,
          imgUrl: require('../../../assets/images/car.png'),
          plateNum: '鲁Q.3352A',
          address: '东大门',
          inDate: '2021/05/03',
          inTime: '16:27:31'
        },
        {
          type: 2,
          imgUrl: require('../../../assets/images/car.png'),
          plateNum: '浙G.3Q5Z0',
          address: '东大门南侧',
          inDate: '2021/05/01',
          inTime: '07:20:31'
        },
        {
          type: 2,
          imgUrl: require('../../../assets/images/car.png'),
          plateNum: '浙G.3Q5Z0',
          address: '东大门南侧',
          inDate: '2021/05/01',
          inTime: '07:20:31'
        },
        {
          type: 2,
          imgUrl: require('../../../assets/images/car.png'),
          plateNum: '浙G.3Q5Z0',
          address: '东大门南侧',
          inDate: '2021/05/01',
          inTime: '07:20:31'
        },
        {
          type: 2,
          imgUrl: require('../../../assets/images/car.png'),
          plateNum: '浙G.3Q5Z0',
          address: '东大门南侧',
          inDate: '2021/05/01',
          inTime: '07:20:31'
        },
        {
          type: 2,
          imgUrl: '',
          plateNum: '浙G.3Q5Z0',
          address: '东大门南侧',
          inDate: '2021/05/01',
          inTime: '07:20:31'
        },
        {
          type: 2,
          imgUrl: '',
          plateNum: '浙G.3Q5Z0',
          address: '东大门南侧',
          inDate: '2021/05/01',
          inTime: '07:20:31'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
