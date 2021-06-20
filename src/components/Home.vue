<template>
  <div>
    <div class="hello row">
      <div class="pic">
        <img alt="Nix" src="../assets/nix-avatar.jpg">
        <img alt="Nix" src="../assets/nix-avatar2.png" class="img-top">
      </div>
      <h3>はじめまして！Christineです！<br>ヽ(・∀・)ﾉ</h3>
      <h5>I am a software developer and UX enthusiast from Quezon City, Philippines.</h5>
    </div>

    <div class="background container">
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
            <h5 class="center">User-focused</h5>

            <p>While my work mostly focused on developing product features, it is important to keep the users in mind as we build. I made sure to make each feature I code user-friendly, regardless of the system's complexity.</p>
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
      <div class="row">
        <h6>Interested in my career? Click here!</h6>
      </div>
    </div>

    <!-- <div class="interests row">
      <h3>Interests</h3>
    </div> -->

    <div class="contact row">
      <h3>Let's connect!</h3>
      <div class="container">
        <div class="col s12 m6">
          <div>
            
          </div>
        </div>

        <div class="col s12 m6">
          <div class="icon-block">
            <h2 class="center"><i class="material-icons">settings</i></h2>
          </div>
        </div>
      </div>
    </div>

    <div class="footer row">
      <h6>Christine Felizardo, 2021.</h6>
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
  padding-bottom: 100px;
}
.hello h3 {
  color: #ffffff;
}
.hello h5 {
  color: #ffffff;
}
.background {
  padding-top: 40px;
  background-color: white;
  padding-bottom: 40px;
}
.interests {
  padding-top: 40px;
  background-color: #333f50;
  padding-bottom: 40px;
}
.interests h3 {
  color: #ffffff;
}
/*.contact {
  padding-top: 40px;
  background-color: white;
  padding-bottom: 100px;
}*/
.contact {
  padding-top: 40px;
  background-color: #333f50;
  padding-bottom: 40px;
}
.contact h3 {
  color: #ffffff;
}
.footer {
  background-color: #333f50;
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer h6 {
  color: #ffffff;
}
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
img {
  border-radius: 50%;
  width: 320px;
  height: 320px;
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
