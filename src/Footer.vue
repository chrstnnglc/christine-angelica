<template>
  <div id="footer">
    <div class="contact row">
      <div class="container">
        <div class="col s12 m12">
          <h5>Let's connect!</h5>
          <div class="icon-block">
            <h6 class="center">
              <a href="https://www.linkedin.com/in/catfelizardo/" target="_blank"><img src="./assets/linkedin.png"></a>
              <a href="https://www.twitter.com/chrstnnglc" target="_blank"><img src="./assets/twitter.png" /></a>
              <!-- <a href="mailto:catfelizardo@gmail.com" target="_blank"><img src="./assets/email.png" /></a> -->
            </h6>
            <p>catfelizardo@gmail.com</p>
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
#footer {
  font-family: 'Aileron', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.contact {
  padding-top: 10px;
  background-color: #91a8d0;
  padding-bottom: 10px;
  margin-bottom: 0px;
}
.contact .container .col .icon-block h6 img {
  padding-left: 10px;
  padding-right: 10px;
}
#footer .contact .container .col h5 {
  text-align: center;
  font-size: 24px;
  color: #ffffff;
}
.contact .container .col .icon-block p {
  text-align: center;
  font-size: 18px;
  color: #ffffff;
}
</style>
