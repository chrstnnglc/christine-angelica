import Vue from 'vue'
import Home from './Home.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
}).$mount('#home')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')