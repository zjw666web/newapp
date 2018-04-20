// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import 'lib-flexible'
import footers from './components/footers'
Vue.config.productionTip = false
import axios from 'axios'
//axios 可以携带cookie
axios.defaults.withCredentials=true 
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components:{footers}
})
