<template>
  <div id="projects">
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li><a href="/about">About</a></li>
          <li class="active"><a href="/projects">Projects</a></li>
          <!-- <li><a href="/contact">Contact</a></li> -->
        </ul>
      </div>
    </nav>

    <div class="container">
      <h3>Projects</h3>
      <p class="p-intro">This is a collection of my experiences as a developer, reframed as UX projects.</p>
      <div class="row descriptions">
        <div class="col s12 m12">
          <h4 id="mac">Company website for Montepiedra Aggregates Corporation</h4>
          <p>I designed and developed a static informational website for Montepiedra.</p>
          <p>I coordinated with the client to work on the design of the website. Naturally, the overall look and feel of the website should be consistent with the company branding; in this case, the aesthetic is minimalistic and zen.</p>
          <p>I also kept in mind that the visitors of this website are potential customers, or existing customers who (primarily) want to know about the company's products and contact details.</p>
          <p>With these in mind, I designed a few mockups for the client to have an idea. Modifications were still made during development, such as the copy and photos to display. Changes in code were not as costly, as I just needed to include various elements on the page.</p>
          <p>The project was developed using Django.</p>

          <hr>

          <h4 id="sis">School information system</h4>
          <p>I worked with a team to develop a school information system. Modules were divided among us to work on. While I worked on functions from different modules, the bulk of my work was in the Grading module.</p>
          <p>One workflow of the Grading module is setting up grading components as a batch, i.e. creating grading components for multiple sections. The data is structured so that grading components are nested within one another, meaning a grading component can be a parent to another grading component.</p>
          <p>To replicate and match this data structure, I used the Tree module of Angular Material for the form. Users are able to add a grading component to each existing one, aware of which components fall under a certain component.</p>
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
  font-size: 20px;
}
.descriptions h4 {
  text-align: left;
}
.descriptions p {
  text-align: justify;
  font-size: 20px;
}
</style>
