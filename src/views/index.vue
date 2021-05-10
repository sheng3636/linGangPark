<template>
  <div id="app">
    <Header />
    <iframe width="100%" height="1080vh" src="https://www.thingjs.com/s/d031bf3b341912475796bbcb"></iframe>
    <router-view/>
  </div>
</template>

<script>
import Header from './header'
export default {
  name: 'index',
  components: { Header }
}
</script>

<style scoped>

</style>
