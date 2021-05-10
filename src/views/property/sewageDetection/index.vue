<template>
     <div class="main-index right-index sewage-right">
       <Title title="污水检测"></Title>
       <waterPie height="260px" class="m-t-30"></waterPie>
     </div>
</template>

<script>
import Title from '../../../components/title'
import waterPie from './components/waterPie'
export default {
  name: 'index',
  components: { Title, waterPie }
}
</script>

<style scoped>

</style>
