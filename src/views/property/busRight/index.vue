<template>
<div class="main-index right-index bus-right">
  <Title title="无人观光巴士"></Title>
  <div class="p-l-35 m-t-45 p-r-10">
    <subTitle sub-title="车辆管理" />
    <div class="t-c">
      <img src="../../../assets/images/bus.png" alt="">
    </div>
    <div class="flex-container start m-t-35">
      <p class="bus-right-title f-16 c-fff p-r-35">车辆总数</p>
      <p class="bus-right-color f-32">210</p>
    </div>
    <busLineChart height="110px"></busLineChart>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import busLineChart from './components/busLineChart'
export default {
  name: 'index',
  components: { Title, subTitle, busLineChart }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
