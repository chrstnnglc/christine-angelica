<template>
  <div id="projects">
    <nav>
      <div class="nav-wrapper">
        <ul class="right">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li><a href="/about">About</a></li>
          <li class="active"><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <!-- <li><a href="/contact">Contact</a></li> -->
        </ul>
      </div>
    </nav>

    <div class="container">
      <h3>Projects</h3>
      <p class="p-intro">A detailed collection of my design experiences and developer work reframed as UX projects.</p>

      <div class="row descriptions">
        <div class="col s12 m12">

          <h4 id="vacc">Vaccination booking mini web app</h4>
          <img src="./assets/proj/vacc.png">
          <p>Check out the <a href="https://book-vax.herokuapp.com/" target="_blank">website</a>.</p>
          <p>For my onboarding at Akaru Philippines, I was tasked to design and develop a vaccination booking mini web app. This was my first experience with Figma, as well as React development.
            
          <p>I sketched the initial design, then created mockups on Figma. In development, I used Django for the API calls, React Typescript as the front-end framework, MySQL for the database, and Bootstrap as the UI framework.</p>

          <p>Since the project was made on a time limit, I aimed to finish the main features. Many improvements can still be made in the app, such as alignment of the text in the buttons and implementing a login feature for the Admin page.</p>

          <hr>

          <h4 id="mac">Montepiedra Aggregates Corporation company website</h4>
          <img src="./assets/proj/mac.png">
          <p>Check out the <a href="http://www.montepiedra.com.ph/" target="_blank">website</a>.</p>
          <p>I designed and developed a static informational company website for Montepiedra Aggregates Corporation, an aggregates company in the Philippines. The website is designed to be simple, matching the company's visual identity approach. The company's target customers are in Visayas, where Internet connections are comparatively slow.</p>

          <p>Changes to the design were relatively flexible, since development was not as costly on time and effort.</p>

          <p>The design process of the website is as follows:</p>
          <p class="desc-list">
            The client introduced their branding, and what information they wanted to include in the website.<br>
            I created a mockup of the landing page using Atomic.io and regularly modified the mockup based on client feedback.<br>
            I created a new Django project and started developing the website, also modifying the design regularly. Elements such as photos and copy were added and changed as we went along.<br>
            Once all the initial elements were in place, the website was launched on Heroku.<br>
            Content is updated every now and then whenever the client wants to add more information.
          </p>

          <p>Outside of the design process, I also set up the client's web and email hosting.</p>

          <p><b>For future consideration:</b> gathering visitor feedback and improving the design based on those insights.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style>
#projects {
  font-family: 'Aileron', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8ff;
}
#projects .container .row {
  padding-bottom: 30px;
}
#projects .container h3, #projects .container .p-intro {
  text-align: center;
}
.p-intro {
  font-size: 18px;
}
.descriptions .col img {
  width: 90%;
  height: 90%;
}
.descriptions h4 {
  text-align: left;
}
.descriptions p {
  text-align: justify;
  font-size: 18px;
}
.desc-list {
  margin-left: 20px;
}
</style>
