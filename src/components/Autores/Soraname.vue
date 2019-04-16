<template>
<div id="Soraname">
  <div class="row">
      <div class="col s12 autor-header">
        <img :src="pageautor.Logo" width="128"> <h1>{{pageautor.Nome}}</h1>
      </div>
    </div>
  <div class="row">
    <div class="col s12 autor-header">
      <h3>Bio</h3>
      <p>{{pageautor.Bio}}</p>
    </div>
  </div>

  <div class="row">

    <div v-for="link in pageautor.links" class="col s12 m4 autor-link">
      <h4>{{link.Item}}</h4>
      <a :href="link.Elo">
        <p><img :src="link.Img">{{link.Text}}</p>
      </a>
    </div>

  </div>

  <div v-for="manga in pageautor.mangas" class="row">
    <div class="col s12 manga-link">
      <a :href="manga.Elo">
        <h2>{{manga.Titulo}}</h2>      
        <p><img :src="manga.Img" width="128">{{manga.Sinopse}}</p>
      </a>
    </div>
  </div>

</div>
</template>

<script>

export default {
      name: 'soraname',
      components: {
      },
      data() {
        return {
            pageautor: {
              Nome: "Soraname", 
              Bio: '/soraname', 
              Logo: '/assets/media/logos/soraname.png',  
              Color: 'purple accent-3',
              links: [
                {
                  Item: 'LINKSoraname', 
                  Elo: '/soraname', 
                  Text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ', 
                  Img: '/autores/soraname/link01.png'
                },
                {
                  Item: 'LINKYoutube canal', 
                  Elo: 'https://www.facebook.com', 
                  Text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ', 
                  Img: '/autores/soraname/link01.png'
                },
                {
                  Item: 'LINKSoraname', 
                  Elo: '/soraname', 
                  Text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ', 
                  Img: '/autores/soraname/link01.png'
                }
              ],
              mangas: [
                {
                  Titulo: 'MANGASoraname', 
                  Elo: '/soraname', 
                  Sinopse: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
                  Img: '/assets/media/logos/soraname.png'
                },
                {
                  Titulo: 'MANGAYoutube canal', 
                  Elo: 'https://www.facebook.com', 
                  Sinopse: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
                  Img: '/assets/media/logos/soraname.png'
                },
                {
                  Titulo: 'MANGASoraname', 
                  Elo: '/soraname', 
                  Sinopse: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
                  Img: '/assets/media/logos/soraname.png'
                }
              ]
            }
          }
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
