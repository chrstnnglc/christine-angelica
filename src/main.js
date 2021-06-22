import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')