<template>
  <div id="slider">

    <div id="slider2" class="carousel carousel-slider center">
      
      <div v-for="(menu, index) in menus" :key="index" class="carousel-item red white-text"  :href="menu.posicao">
        <img :src="menu.IMG" />
        <p>          
          {{menu.desc}}
        </p>
        <router-link :to="menu.Link" class="btn-large waves-effect white teal accent-4">{{menu.Text}}</router-link>
        
      </div>

    </div>
  </div>
</template>

<script>

export default {
      name: 'slider',
      components: {
      },
      data() {
        return {
          menus: {
            Menu01: { Text: 'Leia agora!', Link: '/soraname', IMG: '/home/slider02.png', desc: 'A história de Maomé contra Lúcifer. A batalha continua.', posicao: '#one!' },
            Menu02: { Text: 'Capítulo 10 lançado!', Link: '/temero', IMG: '/home/slider01.jpg', desc: 'A história de Maomé contra Lúcifer. A batalha continua.', posicao: '#two!' },
          },
          side: 'left',
          currentMenu: 'slide'
        };
      },
      components: {
      },
      methods: {
        changeMenu(menu) {
          this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
          return this.currentMenu;
        },
        changeSide(side) {
          this.side = side;
        }
      }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
