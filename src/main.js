import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  //设置false以阻止Vue在启动时生成生产提示

// 配置应用的字体比例
import './assets/js/font'
import './assets/css/base.css'

// 引入路由变量
import router from './plugins/router'

import axios from './plugins/axios'

Vue.prototype.BaseUrl='http://120.55.164.44:80'

import date from './filters/date'
Vue.filter('date',date)

import store from './plugins/store'

//强刷时同步storage && state
let local = window.localStorage.getItem('vuex_user');
if(local){
  store.commit('UPDATE_USER',JSON.parse(local))
}

 new Vue({
  // data:{
  //   bNav:true,
  //   bFoot:true,
  //   bLoading:false
  //   },
  render: h => h(App),
  router,store
}).$mount('#app')

// axios.setupInterceptors(vm);