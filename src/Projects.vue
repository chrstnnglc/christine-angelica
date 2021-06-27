<template>
  <div id="projects">
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
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
      <p class="p-intro">This is a collection of my experiences as a developer, reframed as UX projects.</p>
      <div class="row descriptions">
        <div class="col s12 m12">
          <h4 id="mac">Company website</h4>
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

          <hr>

          <h4 id="sis">Batch Setup Grading module for a school information system</h4>
          <p>I’m currently working with a team on a new version of an integrated information management system for schools. The modules include admissions, enrollment, revenue processing, grading, etc. As a developer, I translate the database design and wireframes to code, and helped improve on those designs through the lens of the tech stack. I primarily developed the Grading module, to be used mostly by teachers to manage student grades.</p>

          <p>For this project, we prioritized developing all the features first before modifying the aesthetics. But the Angular Material framework provides the interface with a clean and modern look, and neatly organizes the numerous workflows available in the system.</p>

          <p>After reaching certain milestones, we conduct internal usability tests to ensure that the features are usable and the design makes them pleasant to use. Our testers are technical support associates - who frequently coordinate with our client schools - of the current version of our school information system, and the sales team. We then use the feedback from our tests to improve on system features and design.</p>

          --

          <p>One particular workflow of the Grading module allows the teacher (the user) to set up grading components for one or more classes before the academic year begins. </p>

          <p>The challenge was more on coding, but design still played an important role. Given the wireframe and the database schema of the <code>GradingComponent</code> object, I thought about which data structure to use to easily visualize the object data, and worked on how that can be best viewed on the interface.</p>

          <p>For each grading component, users need to input or select the following:</p>
          <p class="desc-list">
            the name of the grading component,<br>
            whether or not it has subcomponents,<br>
            what percent of its parent it takes up (decimal values between 0 to 100), and<br>
            whether or not it is credited.
          </p>

          <p>Structured as a tree, the <code>GradingComponent</code> object can be nested in another of its kind; it can have many subcomponents that are also <code>GradingComponents</code>. There is no limit to the tree’s depth.</p>

          <p>With these designs and the tech stack in mind, I developed the interface so that users can add top-level components and subcomponents under existing components, and input the necessary fields. I used Angular Forms and the Angular Material Tree module.</p>

          <p>The user will be able to review their inputs just before submitting the forms for creation.</p>

          <p><b>For future consideration:</b> Conducting an internal usability test with the design.</p>
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
