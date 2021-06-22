<template>
  <div>
    <div class="hello row">
      <div class="col s12 m4">
        <div class="pic">
          <img alt="Nix" src="../assets/nix-avatar.jpg">
          <img alt="Nix" src="../assets/nix-avatar2.png" class="img-top">
        </div>
      </div>
      <div class="col s12 m8">
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
      <!-- <h3>Projects</h3> -->
      <div class="row">
        <div class="col s12 m6">
          <div class="project card">
            <div class="card-image">
              <img alt="Nix" src="../assets/nix.jpg" class="img-top">
              <span class="card-title">Company website</span>
            </div>
            <div class="card-content">
              <p>A static informational website for Montepiedra Aggregates Corporation that I designed and developed. <a href="http://www.montepiedra.com.ph/">Check out the website.</a></p>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="project card">
            <div class="card-image">
              <img alt="Nix" src="../assets/nix.jpg" class="img-top">
              <span class="card-title">School information system</span>
            </div>
            <div class="card-content">
              <p>Worked with a team as a full stack developer, prominently on the Grading module, ensuring usefulness, accessibility, and usability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-bottom: 0px;
}
.hello {
  padding-top: 100px;
  background-color: #333f50;
  padding-bottom: 50px;
}
.hello h3 {
  text-align: left;
  color: #ffffff;
}
.hello h5 {
  text-align: left;
  color: #ffffff;
}
.background {
  padding-top: 40px;
  background-color: white;
  padding-bottom: 40px;
}
.projects {
  padding-top: 40px;
  /*background-color: #333f50;*/
  padding-bottom: 40px;
}
/*.projects h3 {
  color: #ffffff;
}*/
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
</style>
