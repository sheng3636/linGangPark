<template>
<div class="main-index right-index enterprise-right">
  <Title title="企业服务"></Title>
  <div class="p-l-50 m-t-40 p-r-30">
    <subTitle sub-title="政策通知"></subTitle>
    <ul class="enterprise-right-ul">
      <li>疫情中殉职的基层医务人员：8人...</li>
      <li>中集赶制30余台液氧储罐助力湖...</li>
    </ul>
    <subTitle sub-title="企业统计" class="m-t-40"></subTitle>
    <div class="flex-container start">
      <enterprisePie height="240px" style="width: 50%" />
      <div class="flex-container column" style="width: 80%">
        <div class="flex-container start ">
          <div class="flex-container column m-r-20">
            <p class="f-16 c-fff t-l">楼宇数</p>
            <p class="m-t-20 enterprise-right-color f-28 t-l">25 <span class="f-20">个</span></p>
          </div>
          <div class="flex-container column">
            <p class="f-16 c-fff">总办公租赁面积</p>
            <p class="m-t-20 enterprise-right-color f-28">1454<span class="f-20">万m2</span></p>
          </div>
        </div>
        <div class="flex-container start t-l m-t-35">
          <div class="flex-container column">
            <p class="f-16 c-fff">租赁企业数</p>
            <p class="m-t-20 enterprise-right-color f-28">5253 <span class="f-20">家</span></p>
          </div>
          <div class="flex-container column">
            <p class="f-16 c-fff">园区占地面积</p>
            <p class="m-t-20 enterprise-right-color f-28">1777<span class="f-20">万m2</span></p>
          </div>
        </div>
      </div>
    </div>
    <subTitle sub-title="纳税统计（年）"></subTitle>
    <div class="flex-container between m-t-35">
      <div>
        <p class="f-16 c-fff">2019年</p>
        <p class="f-24 enterprise-right-orange m-t-20">23989.2<span class="f-12">万</span></p>
      </div>
      <div>
        <p class="f-16 c-fff">2019年</p>
        <p class="enterprise-right-blue f-24 m-t-20">45689.2<span class="f-12">万</span></p>
      </div>
      <div>
        <p class="f-16 c-fff">2019年</p>
        <p class="enterprise-right-green f-24 m-t-20">17.85<span class="f-12">%</span></p>
      </div>
    </div>
    <subTitle sub-title="税收额度排名"></subTitle>
    <rankingLineChart height="260px"></rankingLineChart>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import enterprisePie from './components/enterprisePie'
import rankingLineChart from './components/rankingLineChart'
export default {
  name: 'index',
  components: { Title, subTitle, enterprisePie, rankingLineChart }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
