// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

//mint ui 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// axios引入
import Axios from 'axios'
// Axios 请求拦截器
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('响应拦截器')
    console.log(response)
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
Vue.prototype.$axios=Axios

// 重置样式
import './style/reset.less'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
