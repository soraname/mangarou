import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = true

Vue.use(Vuex)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
