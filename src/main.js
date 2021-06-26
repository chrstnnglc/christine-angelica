import Vue from 'vue'
import Home from './Home.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Oops from './Oops.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/oops': Oops
}

// new Vue({
//   render: h => h(Home),
// }).$mount('#home')

new Vue({
  el: '#home',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Oops
    }
  },
  render (h) { return h(this.ViewComponent) }
})

new Vue({
  render: h => h(Footer),
}).$mount('#footer')