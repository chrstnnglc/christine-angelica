<template>
  <div id="footer">
    <div class="contact row">
      <!-- <h3>Let's connect!</h3> -->
      <div class="container">
        <div class="col s12 m12">
          <div class="icon-block">
            <h6 class="center">
              <a href="https://www.linkedin.com/in/christine-felizardo-116625136/" target="_blank"><img src="./assets/linkedin.png"></a>
              <a href="https://www.twitter.com/chrstnnglc" target="_blank"><img src="./assets/twitter.png" /></a>
              <a href="mailto:catfelizardo@gmail.com" target="_blank"><img src="./assets/email.png" /></a>
            </h6>
            <p>Christine Felizardo, 2021.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style>
@font-face {
  font-family: "Aileron";
  src: local("Aileron"),
   url(./fonts/Aileron/Aileron-Light.otf) format("opentype");
}
#footer {
  font-family: "Aileron", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.contact {
  padding-top: 10px;
  background-color: #333f50;
  padding-bottom: 10px;
  margin-bottom: 0px;
}
.contact .container .col .icon-block h6 img {
  padding-left: 10px;
  padding-right: 10px;
}
.contact .container .col .icon-block p {
  color: #ffffff;
}
</style>
