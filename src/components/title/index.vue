<template>
  <div class="title">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
