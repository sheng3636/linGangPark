<template>
  <div class="main-index left-index p-l-40 p-r-40 flex-container between wrap property-left">
    <div class="t-c property-left-flex c-pointer" v-for="(item,index) in DataList" :key="index" @click="haldeClick(item)">
      <p class="left-index-icon"><i class="iconfont" :class="item.icon"></i></p>
      <p class="f-16 c-fff m-t-15">{{item.equName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      DataList: [
        {
          icon: 'iconrenqunjiankong',
          equName: '视频监控'
        },
        {
          icon: 'iconcheluxietong',
          equName: '车路协同'
        },
        {
          icon: 'iconwushui',
          equName: '污水检测'
        },
        {
          icon: 'iconchongdianzhuang2-copy',
          equName: '充电桩'
        },
        {
          icon: 'icontingcheguanli',
          equName: '停车管理'
        },
        {
          icon: 'iconwurenji',
          equName: '无人机数据'
        },
        {
          icon: 'iconbashi',
          equName: '无人观光巴士'
        },
        {
          icon: 'iconqiyefuwu',
          equName: '企业服务'
        },
        {
          icon: 'iconicon-wuyeguanli-',
          equName: '物业管理'
        },
        {
          icon: 'iconhuiyi',
          equName: '会议系统'
        },
        {
          icon: 'iconkongzhi',
          equName: '楼宇自控'
        }
      ]
    }
  },
  methods: {
    haldeClick (val) {
      this.$emit('haldeClick', val)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "index";
</style>
