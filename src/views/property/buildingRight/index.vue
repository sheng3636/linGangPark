<template>
<div class="main-index right-index building-right">
  <Title title="楼宇自控"></Title>
  <div class="p-l-30 p-r-20">
    <subTitle sub-title="设备运行状态" class="m-t-25"></subTitle>
    <div class="flex-container between m-t-30">
      <div class="building-right-tab t-c c-pointer" v-for="(item,index) in tabList" :key="index" @click="tabClick(index)" :class="{active: active === index}">
        <p class="building-right-tab-title">
          <i class="iconfont" :class="item.className"></i>
          <span>{{item.typeNumber}}</span>
        </p>
        <p class="building-right-tab-subTitle">{{item.type}}</p>
      </div>
    </div>
    <eventTable class="m-t-15">
      <el-table :data="eventList" style="width: 100%" height="230" :highlight-current-row="true">
        <el-table-column prop="equName" label="设备名称" align="center" show-overflow-tooltip min-width="85">
          <template slot-scope="scope">
            <span v-if="active == 0"><i class="iconfont iconzhaomingdeng"></i>{{scope.row.equName}}</span>
            <span v-if="active == 1"><i class="iconfont iconkongtiao"></i>{{scope.row.equName}}</span>
            <span v-if="active == 2"><i class="iconfont iconyangan"></i>{{scope.row.equName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Type" label="状态" align="center" show-overflow-tooltip min-width="85">
          <template slot-scope="scope">
            <span class="green" v-if="scope.row.Type === '正常'">正常</span>
            <span class="orange" v-else>异常</span>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="编号" align="center" show-overflow-tooltip min-width="85"/>
      </el-table>
    </eventTable>
    <subTitle sub-title="电梯监控画面" class="m-t-25"></subTitle>
    <subTitle titleClass="titleClass" class="c-f3ff p-l-20 m-t-15" sub-title="监控编号" small-title="2154CV1441" />
    <div class="building-right-video">
      <img src="../../../assets/images/video.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
import eventTable from '../../../components/table'
export default {
  name: 'index',
  components: { Title, subTitle, eventTable },
  data () {
    return {
      active: 0,
      tabList: [
        {
          className: 'iconzhaomingdeng',
          typeNumber: '135',
          type: '照明'
        },
        {
          className: 'iconkongtiao',
          typeNumber: '135',
          type: '空调'
        },
        {
          className: 'iconyangan',
          typeNumber: '135',
          type: '烟感'
        }
      ],
      eventList: [
        {
          equName: '照明',
          Type: '正常',
          number: '2012C5451'
        },
        {
          equName: '照明',
          Type: '正常',
          number: '2012C5451'
        },
        {
          equName: '照明',
          Type: '正常',
          number: '2012C5451'
        },
        {
          equName: '照明',
          Type: '正常',
          number: '2012C5451'
        }
      ]
    }
  },
  methods: {
    tabClick (index) {
      this.active = index
      if (index === 0) {
        this.eventList = [
          {
            equName: '照明',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '照明',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '照明',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '照明',
            Type: '正常',
            number: '2012C5451'
          }
        ]
      } else if (index === 1) {
        this.eventList = [
          {
            equName: '空调',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '空调',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '空调',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '空调',
            Type: '正常',
            number: '2012C5451'
          }
        ]
      } else {
        this.eventList = [
          {
            equName: '烟感',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '烟感',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '烟感',
            Type: '正常',
            number: '2012C5451'
          },
          {
            equName: '烟感',
            Type: '正常',
            number: '2012C5451'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
