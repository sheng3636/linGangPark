<template>
<div class="subTitle" :class="titleClass">
  <span v-if="subTitle">{{subTitle}}</span>
  <span class="p-l-35" v-if="smallTitle"><i  v-if="icon" class="iconfont" :class="icon"></i>{{smallTitle}}</span>
</div>
</template>

<script>
export default {
  name: 'subTitle',
  props: {
    subTitle: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    smallTitle: String,
    icon: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
