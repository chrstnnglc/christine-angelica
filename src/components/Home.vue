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

    <div class="background row">
      <h3>Background</h3>
    </div>

    <div class="interests row">
      <h3>Interests</h3>
    </div>

    <div class="contact row">
      <h3>Let's chat!</h3>
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
  padding-top: 40px;
  padding-bottom: 100px;
}
.hello {
  padding-top: 100px;
  background-color: #333f50;
}
.hello h3 {
  color: #ffffff;
}
.hello h5 {
  color: #ffffff;
}
.background {
  background-color: white;
}
.interests {
  background-color: #333f50;
}
.interests h3 {
  color: #ffffff;
}
.contact {
  background-color: white;
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
