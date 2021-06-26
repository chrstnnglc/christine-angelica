<template>
  <div id="about">
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li class="active"><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
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
          <p>I'm a software dev from QC. I graduated BS Computer Science from  University of the Philippines Diliman in 2018.</p>

          <h5><b>Work experience</b></h5>
          <ul id="experience">
            <li><h6><b>July - August 2017</b> Intern at Insync HQ</h6></li>
            <li><h6><b>July - September 2018</b> Freelance</h6></li>
            <li><h6><b>October 2018 - present</b> Software developer at Headstart Business Solutions Inc.</h6></li>
          </ul>

          <p>In my spare time, I like watching TV shows/anime/YouTube videos, playing video games, reading books, and learning Nihongo. I also like collecting albums and cards.</p>
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
