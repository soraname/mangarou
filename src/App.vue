<template>
  <div id="app">
    <div id="main" class="row">
      <a id="menu-open" href="#!" @click.prevent="updateMenu('openmenu', 'expcontent')">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" style="fill:#ffffff"/></svg>
      </a>
      <Menu :class="{ openmenu: isOpen == 'openmenu' }"></Menu>
      <Content :class="{ expcontent: isCOpen == 'expcontent' }"></Content>
      
    </div>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'
import Slider from './components/Slider.vue'

var autor;
var manga;
var capitulo;

export default {
  data(){
    return {
      isOpen: 'openmenu',
      isCOpen: 'expcontent'
    }
  },
  name: 'app',  
  components: {
    Menu, Content, Slider
  },
  methods: {
    updateMenu(menu, content) {
      this.isOpen = this.isOpen === menu ? null : menu;
      this.isCOpen = this.isCOpen === content ? null : content;
    }
  } 

}
</script>
<style>

</style>
