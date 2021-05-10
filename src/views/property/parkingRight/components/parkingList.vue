<template>
  <div class="scroll parking-list-content">
    <div class="parking-list flex-container start p-t-15 " v-for="(item,index) in parkDataList" :key="index">
      <div class="parking-list-carImg p-r-20">
        <img v-if="item.imgUrl" :src="item.imgUrl" alt="">
        <div v-else class="parking-list-noData">暂无图片</div>
      </div>
      <div class="parking-list_list">
        <p class="f-14 c-fff">车牌号: <span class="parking-list-color p-r-20">{{item.plateNum}}</span><span class="f-12 green" v-if="item.type === 1">已缴费</span>
          <span class="f-12 orange" v-if="item.type === 2">未缴费</span>
        </p>
        <p class="m-t-25 f-14 c-fff t-l">车辆位置: <span class="parking-list-color">{{item.address}}</span></p>
        <p class="m-t-25 f-14 c-fff t-l">入园时间: <span class="parking-list-color">{{item.inDate}}  {{item.inTime}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'parkingList',
  props: {
    parkDataList: Array
  }
}
</script>

<style scoped lang="scss">
  .parking-list-content{
    height: 550px;
    .parking-list{
      padding-bottom: 12px;
      padding-right: 10px;
      border-bottom: 1px solid rgba(255,255,255,.8);
      .parking-list-carImg{
        img{
          width: 190px;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .parking-list-color{
        color: #00f6ff;
      }
      .parking-list_list{
        text-align: right;
      }
      .parking-list-noData{
        width: 190px;
        height: 140px;
        text-align: center;
        line-height: 140px;
        background: #9999;
        color: #ccc;
      }

      .green{
        color: #07ff2a;
      }
      .orange{
        color: #ff7e00;
      }
    }
  }

</style>
