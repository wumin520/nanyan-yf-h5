import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import TabBar from './components/tabBar.vue'
Vue.component("tabBar", TabBar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
