<template>
  <div id="app">
    <div id="main" class="row">
      
      <Menu></Menu>
      <Content></Content>
      
    </div>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'
import Slider from './components/Slider.vue'

export default {
  name: 'app',
  components: {
    Menu, Content, Slider
  }
}
</script>
<style>

</style>
