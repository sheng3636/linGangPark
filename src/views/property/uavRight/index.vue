<template>
<div class="main-index right-index uav-right">
  <Title title="无人机总数"></Title>
  <div class="p-l-35 m-t-45 p-r-20">
    <subTitle sub-title="无人机管理" class="m-b-25" />
    <div class="flex-container start">
      <i class="iconfont iconwurenji f-70 c-blue_cyan p-r-35"></i>
      <div class="">
        <p class="f-16 c-fff uav-right-title">无人机总数</p>
        <p class="f-32 uav-right-color m-t-25">60</p>
      </div>
    </div>
    <uavLineChart height="110px"></uavLineChart>
    <subTitle titleClass="titleClass" class="c-f3ff p-l-20 m-t-20" sub-title="监控一" small-title="东大门100米" />
    <div class="uav-right-video">
      <img src="../../../assets/images/video.png" alt="">
    </div>
    <subTitle titleClass="titleClass" class="c-f3ff p-l-20 m-t-20" sub-title="监控二" small-title="东大门100米" />
    <div class="uav-right-video uav-right-noVideo">
      <p>无信号</p>
    </div>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import uavLineChart from './components/uavLineChart'
export default {
  name: 'index',
  components: {
    Title,
    subTitle,
    uavLineChart
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
