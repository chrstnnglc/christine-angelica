<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@font-face {
  font-family: "Aileron";
  src: local("Aileron"),
   url(./fonts/Aileron/Aileron-Light.otf) format("opentype");
}
#app {
  font-family: "Aileron", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
