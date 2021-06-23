<template>
  <div id="home">
    <!-- <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="background.html">Background</a></li>
          <li><a href="interests.html">Interests</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav> -->
    <div class="hello row">
      <div class="col s12 m12">
        <div class="pic">
          <img alt="Nix" src="./assets/nix-avatar.jpg">
          <!-- <img alt="Nix" src="./assets/nix-avatar2.png" class="img-top"> -->
        </div>
      </div>
      <div class="col s12 m12">
        <h3>はじめまして！Christineです！<br>ヽ(・∀・)ﾉ</h3>
        <h5>I am a software developer and UX enthusiast from Quezon City, Philippines.</h5>
      </div>
    </div>

    <!-- <div class="background container">
      <h3>Background</h3>
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Problem solver</h5>

            <p>I've been working as a software engineer for almost 3 years. As a translator of real-world scenarios to code, I have encountered (and solved!) many implementation challenges and roadblocks.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Eager learner</h5>

            <p>I am passionate about learning ways to make designs pleasant and usable. The challenges I encountered in my work as a software developer paved ways for me to learn.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Team player</h5>

            <p>I work well with my teammates and colleagues, and form good relationships with them. I do my part to synthesize.</p>
          </div>
        </div>
      </div>
    </div> -->

    <div class="projects container">
      <h3>Projects</h3>
      <div class="row">
        <div class="col s12 m6">
          <div class="project card">
            <!-- <div class="card-image">
              <img src="./assets/mac.png">
            </div> -->
            <div class="card-content">
              <span class="card-title">Company website</span>
              <p>A static informational website for Montepiedra Aggregates Corporation that I designed and developed. Ensured design stays true to their brand, and is accessible to potential customers. <a href="http://www.montepiedra.com.ph/">Check out the website.</a></p>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="project card">
            <!-- <div class="card-image">
              <img alt="Nix" src="./assets/nix.jpg" class="img-top">
            </div> -->
            <div class="card-content">
              <span class="card-title">School information system</span>
              <p>Currently working with a team as a full stack developer, prominently on the Grading module, using Elixir, PostgreSQL, GraphQL, Angular, and Typescript. Ensures usefulness, accessibility, and usability of features.</p>
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
  src: url('./fonts/Aileron/aileron-light-webfont.woff2') format('woff2'),
       url('./fonts/Aileron/aileron-light-webfont.woff') format('woff');
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
  background-color: #333f50;
}
nav a {
  font-family: "Aileron";
  color: #ffffff;
}
a, a:visited {
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
  padding-top: 50px;
  background-color: #91a8d0;
  padding-bottom: 50px;
}
.hello h3, .hello h5 {
  text-align: center;
  color: #ffffff;
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
h3 {
  margin: 40px 0 0;
}
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
.hello .pic img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
}
.pic {
  position: relative;
  display: inline-block;
}
.pic .img-top {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s;
}
.pic:hover .img-top {
  display: inline;
  opacity: 1;
}
.cert {
  width: 90%;
  height: 90%;
}
</style>
