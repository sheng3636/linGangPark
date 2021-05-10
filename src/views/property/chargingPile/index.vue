<template>
<div class="main-index right-index p-l-50 chargingPile-right">
  <Title title="充电桩"></Title>
  <div class="flex-container start m-t-40">
    <img src="../../../assets/images/pile.png" alt="" class="p-r-30">
    <div>
      <p class="f-16 c-fff chargingPile-right-title">充电桩总数</p>
      <p class="f-32 c-blue_col m-t-25">200</p>
    </div>
  </div>
  <div class="flex-container column m-t-30">
    <div class="chargingPile-right-radius flex-container start">
      <div class="chargingPile-right-icon"><i class="iconfont iconshandian"></i></div>
      <div class="chargingPile-right-ra p-l-20">
        <p class="f-24 chargingPile-right-green">80</p>
        <p class="f-12 chargingPile-right-green">在用充电桩(台)</p>
      </div>
    </div>
    <div class="chargingPile-right-radius flex-container start m-t-35">
      <div class="chargingPile-right-orange"><i class="iconfont iconshandian"></i></div>
      <div class="chargingPile-right-ra  p-l-20">
        <p class="f-24 chargingPile-right-color-orange">210</p>
        <p class="f-12 chargingPile-right-color-orange">空闲充电桩(台)</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
export default {
  name: 'index',
  components: { Title }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
