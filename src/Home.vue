<template>
  <div id="home">
    <nav>
      <div class="nav-wrapper">
        <ul class="right"> <!-- id="nav-mobile" class="right hide-on-med-and-down" -->
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <!-- <li><a href="/contact">Contact</a></li> -->
        </ul>
      </div>
    </nav>
    <div class="hello row">
      <div class="col s12 m12">
        <h1>Christine Felizardo</h1>
        <div class="pic">
          <img alt="Nix" src="./assets/nix-avatar.jpg">
          <!-- <img alt="Nix" src="./assets/nix-avatar2.png" class="img-top"> -->
        </div>
      </div>
      <div class="col s12 m12">
        <h5>I am a software developer from the Philippines, looking to transition to UX design.</h5>
        <h6>Also, that's not really me: that's my character in Animal Crossing: New Horizons ヽ(・∀・)ﾉ</h6>
      </div>
    </div>

    <div class="projects container">
      <h3>In a nutshell 🥜</h3>
      <div class="row">
        <div class="col s12 m6">
          <div class="project card">
            <!-- <div class="card-image">
              <img src="./assets/mac.png">
            </div> -->
            <div class="card-content">
              <span class="card-title">Company website</span>
              <p>I designed and developed a static informational website for an aggregates company, ensuring design stays true to their visual identity, and is accessible to potential customers. <br> <a href="/projects#mac">Read more</a>, or check out the <a href="http://www.montepiedra.com.ph/" target="_blank">website.</a></p>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="project card">
            <div class="card-content">
              <span class="card-title">School information system</span>
              <p>I'm currently working with a team as a full stack developer, prominently on the Grading module. As a developer utilizing the provided designs and technology, I ensure the interface matches data structure and function, but is also pleasant for the user to navigate. <br> <a href="/projects#sis">Read more.</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="certificates container">
      <h3>Certificates</h3>
      <div class="row">
        <div class="col s12 m6">
          <img src="./assets/ixdf-member.jpg" class="cert">
          <h6><a href="https://www.interaction-design.org/christine-felizardo/certificate/membership/QD11LtLx1?r=christine-felizardo">Member</a></h6>
          <h6>The Interaction Design Foundation</h6>
        </div>
        <div class="col s12 m6">
          <img src="./assets/ixdf-tpgu.jpg" class="cert">
          <h6><a href="https://www.interaction-design.org/christine-felizardo/certificate/course/d6be9e76-a2ad-4ec9-a4fc-bc3ac2bd424d?certificateType=course">The Practical Guide to Usability (Top 10% Distinction)</a></h6>
          <h6>The Interaction Design Foundation</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // components: {
  //   Home
  // }
}
</script>

<style>
@font-face {
  font-family: 'Aileron';
  src: url('./fonts/Aileron/aileron-regular-webfont.woff2') format('woff2'),
       url('./fonts/Aileron/aileron-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
#home {
  font-family: 'Aileron', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8ff;
}
nav {
  background-color: #91a8d0;
}
nav a, nav a:visited {
  font-family: "Aileron";
  color: #ffffff;
  text-decoration: none;
}
nav a:hover {
  color: #ffffff;
}
a {
  color: #2c3e50;
  text-decoration: underline;
}
a:visited {
  color: #2c3e50;
  text-decoration: underline;
}
a:hover {
  color: #f7cac9;
}
.row {
  margin-bottom: 0px;
}
.hello {
  background-color: #91a8d0;
  padding-bottom: 50px;
}
.hello h1, .hello h5, .hello h6 {
  text-align: center;
  color: #ffffff;
}
.hello .pic img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  padding: 20px;
}
.hello .pic {
  position: relative;
  display: inline-block;
}
.hello .pic .img-top {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s;
}
.hello .pic:hover .img-top {
  display: inline;
  opacity: 1;
}
.background {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
}
.projects, .certificates {
  padding-top: 20px;
  padding-bottom: 40px;
}
.projects h3, .certificates h3 {
  font-size: 36px;
  padding-bottom: 30px;
}
.projects .row .col .project {
  font-size: 18px;
}
/*.projects .row .col .project img {
  width: 300px;
  height: 300px;
}*/
/*.contact {
  padding-top: 40px;
  background-color: white;
  padding-bottom: 100px;
}*/
/*#home .hello h3 {
  margin: 40px 0 0;
}*/
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cert {
  width: 90%;
  height: 90%;
}
</style>
