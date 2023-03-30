<template>
  <div id="app">
    <vHeader />
    <vMain />
    <vFooter />
  </div>
</template>

<script>
import vHeader from './components/header.vue'
import vMain from './components/main.vue'
import vFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    vMain,
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  } 
  .app {
    width: 1920px;
  }
</style>
