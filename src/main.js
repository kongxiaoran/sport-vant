// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';

Vue.config.productionTip = false
var axios = require('axios')    //引用axios，并设置基础URL为后台服务api地址
axios.defaults.baseURL = 'http://47.102.218.124:7002/api/'
Vue.prototype.$axios = axios    // 将API方法绑定到全局

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
