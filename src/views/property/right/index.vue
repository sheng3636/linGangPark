<template>
<div class="main-index right-index property-right">
  <Title title="物业管理" />
  <div class="p-l-50">
    <subTitle subTitle="房屋管理" class="m-t-50 m-b-20" />
    <div class="flex-container start ">
      <div class="property-right-banner flex-container center m-r-15">
        <i class="iconfont iconfangwulouzuoloupanmianxing p-r-20"></i>
        <div>
          <p class="f-14 c-fff">已租房屋</p>
          <p class="c-fff f-14"><span class="f-22 property-right-color">1217</span> 家</p>
        </div>
      </div>
      <div class="">
        <p class="f-14 c-fff">
          <i class="iconfont iconmianji c-fff f-16"></i> 房屋面积
        </p>
        <p class="f-14 c-fff m-t-10">
          <span class="property-right-txcolor f-24 m-r-20">2,818.9</span>
          <span>m²</span>
        </p>
      </div>
    </div>
    <div class="flex-container start m-t-20">
      <div class="property-right-banner flex-container center m-r-15">
        <i class="iconfont iconfangwulouzuoloupanmianxing p-r-20"></i>
        <div>
          <p class="f-14 c-fff">未租房屋</p>
          <p class="c-fff f-14"><span class="f-22 property-right-color">1217</span> 家</p>
        </div>
      </div>
      <div class="">
        <p class="f-14 c-fff">
          <i class="iconfont iconmianji c-fff f-16"></i> 房屋面积
        </p>
        <p class="f-14 c-fff m-t-10">
          <span class="property-right-txcolor f-24 m-r-20">2,818.9</span>
          <span>m²</span>
        </p>
      </div>
    </div>
    <subTitle subTitle="租赁合同管理" class="m-t-20 m-b-20" />
    <div class="flex-container start">
        <propertyPie height="260px" style="width: 260px"></propertyPie>
      <div>
        <p class="f-28 property-right-txcolor">2300</p>
        <p class="f-16 c-fff m-t-35">合同到期</p>
      </div>
    </div>
    <subTitle subTitle="水电房租缴费" class="m-t-20 m-b-20" />
    <hydropowerPie height="220px"></hydropowerPie>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import propertyPie from './components/leasePieChart'
import hydropowerPie from './components/hydropowerPie'
export default {
  name: 'index',
  components: { Title, subTitle, propertyPie, hydropowerPie }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
