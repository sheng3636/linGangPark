<template>
<div class="right-index main-index carRoad-right p-l-40 p-r-20">
  <Title title="车路协同"/>
  <subTitle class="m-t-25 m-b-25" sub-title="路口拥堵排名"/>
  <carRoadChart height="260px"></carRoadChart>
  <subTitle sub-title="行驶事件类型占比"/>
  <eventTypePie height="240px"></eventTypePie>
  <subTitle sub-title="V2X设备在线率"/>
  <deviceOnlinePie height="240px"></deviceOnlinePie>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import carRoadChart from './components/carRoadLineChart'
import eventTypePie from './components/eventTypePie'
import deviceOnlinePie from './components/deviceOnlinePie'
export default {
  name: 'index',
  components: {
    subTitle,
    Title,
    carRoadChart,
    eventTypePie,
    deviceOnlinePie
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
