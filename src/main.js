// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Calendar from 'vue2-datepick'
import store from './vuex/store'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(Calendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
