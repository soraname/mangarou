import Vue from 'vue'
import Vuex from 'vuex'
import { resourceModule } from 'vuex-jsonapi';
import api from './data.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	pageautor: {
              Nome: "Soraname3333", 
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
            },
            soraname: {
              Nome: "SoranamDDDe", 
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
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {

  },
  modules: {
    'autor': resourceModule({
      name: 'autor',
      httpClient: api,
    }),
  }
})
