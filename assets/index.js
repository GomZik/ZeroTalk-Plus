import 'babel-polyfill'
import Vue from 'vue'

Vue.config.debug = true

import App from 'App.vue'

const app = new Vue({
  el: 'body',
  components: {
    App
  }
})
