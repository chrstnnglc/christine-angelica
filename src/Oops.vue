<template>
  <div id="oops">
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <!-- <li><a href="/contact">Contact</a></li> -->
        </ul>
      </div>
    </nav>
    
    <div class="container row">
      <h1>Oops!</h1>
      <h3>There's nothing on this page. <a href="/">Click here</a> to go back home.</h3>
    </div>
    
    <!-- <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li class="active"><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: 'Oops'
}
</script>

<style>
#oops {
  font-family: 'Aileron', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8ff;
}
#oops .row {
  padding-top: 130px;
  padding-bottom: 130px;
}
</style>
