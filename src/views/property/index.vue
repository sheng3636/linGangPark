<template>
<div class="">
  <Left @haldeClick="haldeClick"/>
  <!--视频监控-->
  <videoRight v-if="value === '视频监控' "></videoRight>
  <!--车路协同-->
  <carRoadRight v-if="value === '车路协同' "></carRoadRight>
  <!--污水检测-->
  <sewageDetection v-if="value === '污水检测' "></sewageDetection>
  <!--充电桩-->
  <chargingPile v-if="value === '充电桩'" ></chargingPile>
  <!--停车管理-->
  <parkingRight v-if="value === '停车管理'"></parkingRight>
  <!--无人机数据-->
  <uavRight v-if="value === '无人机数据'"></uavRight>
  <!--无人观光巴士-->
  <busRight v-if="value === '无人观光巴士'"></busRight>
  <!--企业服务-->
  <enterpriseRight v-if="value === '企业服务'"></enterpriseRight>
  <!--物业管理-->
  <Right v-if="value === '物业管理' " />
  <!--会议系统-->
  <meetingRight v-if="value === '会议系统'"></meetingRight>
  <!--楼宇自控-->
  <buildingRight v-if="value === '楼宇自控'"></buildingRight>

</div>
</template>

<script>
import Left from './left'
import Right from './right'
import videoRight from './videoRight'
import carRoadRight from './carRoadRight'
import sewageDetection from './sewageDetection'
import chargingPile from './chargingPile'
import parkingRight from './parkingRight'
import uavRight from './uavRight'
import busRight from './busRight'
import enterpriseRight from './enterpriseRight'
import meetingRight from './meetingRight'
import buildingRight from './buildingRight'
export default {
  name: 'index',
  components: {
    Left,
    Right,
    videoRight,
    carRoadRight,
    sewageDetection,
    chargingPile,
    parkingRight,
    uavRight,
    busRight,
    meetingRight,
    enterpriseRight,
    buildingRight
  },
  data () {
    return {
      value: '视频监控'
    }
  },
  methods: {
    haldeClick (val) {
      this.value = val.equName
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
