import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Soraname from './views/soraname.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/soraname',
      name: 'soraname',
      component: function () { 
        return import('./views/soraname.vue')
      }
    },
    {
      path: '/temero',
      name: 'temero',
      component: function () { 
        return import('./views/temero.vue')
      }
    },
    {
      path: '/autor03',
      name: 'autor03',
      component: function () { 
        return import('./views/autor03.vue')
      }
    },
    {
      path: '/autor04',
      name: 'autor04',
      component: function () { 
        return import('./views/autor04.vue')
      }
    },
    {
      path: '/autor05',
      name: 'autor05',
      component: function () { 
        return import('./views/autor05.vue')
      }
    },
    {
      path: '/autor06',
      name: 'autor06',
      component: function () { 
        return import('./views/autor06.vue')
      }
    },
    {
      path: '/autor07',
      name: 'autor07',
      component: function () { 
        return import('./views/autor07.vue')
      }
    },
    {
      path: '/autor08',
      name: 'autor08',
      component: function () { 
        return import('./views/autor08.vue')
      }
    },
    {
      path: '/autor09',
      name: 'autor09',
      component: function () { 
        return import('./views/autor09.vue')
      }
    },
    {
      path: '/autor10',
      name: 'autor10',
      component: function () { 
        return import('./views/autor10.vue')
      }
    }
  ]
})
