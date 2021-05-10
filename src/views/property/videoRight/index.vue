<template>
<div class="right-video main-index right-index p-l-25 p-r-35">
  <Title title="视频监控" />
  <div class="flex-container start m-t-40">
    <img src="../../../assets/images/video-icon.png" alt="" class="p-r-40">
    <div>
      <p class="f-16 c-f3ff">摄像头总数</p>
      <p class="f-14 c-f3ff m-t-15"><span class="c-blue f-24 p-r-15">462</span>个</p>
      <div class="m-t-45">
        <p class="f-16 c-f3ff">故障设备数量</p>
        <p class="f-14 c-f3ff m-t-15"><span class="c-red f-24 p-r-15">04</span>个</p>
      </div>
    </div>
  </div>
  <subTitle titleClass="titleClass" class="c-f3ff p-l-20 m-t-20" sub-title="监控一" small-title="东大门100米" />
  <div class="right-video_video">
    <img src="../../../assets/images/video.png" alt="">
  </div>
  <subTitle titleClass="titleClass" class="c-f3ff p-l-20 m-t-15" sub-title="监控一" small-title="东大门100米" />
  <div class="right-video_video right-video_noVideo">
    <p>无信号</p>
  </div>
</div>
</template>

<script>
import Title from '../../../components/title'
import subTitle from '../../../components/title/subTitle'
export default {
  name: 'index',
  components: { Title, subTitle }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
