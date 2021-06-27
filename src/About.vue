<template>
  <div id="about">
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li class="active"><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <!-- <li><a href="/contact">Contact</a></li> -->
        </ul>
      </div>
    </nav>

    <div class="container">
      <h3>About Christine (that's me)</h3>
      <div class="row">
        <div class="col s12 m4">
          
        </div>
        <div class="col s12 m8">
          <p>I'm a full-stack software developer in the lovely, lively city of Quezon City in the Philippines. While bulk of my work experience is in code, I'm hoping to transition to a UX career; to do that, I learn what I can by attending UX seminars and taking online courses. I find fulfillment in solving problems, and I enjoy trying new things. 🍰</p>

          <p>In my spare time, I like watching TV shows/anime/YouTube videos, playing video games, reading books, and learning Japanese.</p>

          <p>I also like collecting albums and cards. (Collection page soon? 🤔)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
#about {
  font-family: 'Aileron', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8ff;
}
#about .container .row {
  padding-bottom: 30px;
}
#about .container h3 {
  text-align: center;
}
#about .container .row .col p, #about .container .row .col h5 {
  text-align: left;
}
#about .container .row .col p {
  font-size: 20px;
}
#experience {
  text-align: left;
}
#experience h6 {
  font-size: 20px;
}
</style>
