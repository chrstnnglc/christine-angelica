<template>
  <div id="resume">
    <nav>
      <div class="nav-wrapper">
        <ul>
          <li><a href="/"><i class="material-icons">home</i></a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li class="active"><a href="/resume">Resume</a></li>
          <!-- <li><a href="/contact">Contact</a></li> -->
        </ul>
      </div>
    </nav>

    <div class="container">
      <h4>Christine Angelica Felizardo</h4>
      <h6><a href="https://www.linkedin.com/in/christine-felizardo-116625136/" target="_blank">LinkedIn</a> | catfelizardo@gmail.com</h6>
      <div class="row">
        <div class="col s12 m12">
          <h5>Educational Background</h5>
          <p class="resume-list"><b>Bachelor of Science in Computer Science - University of the Philippines Diliman (2014 - 2018)</b>
            <br>
            Undergraduate thesis: Worked as a pair on opportunistic wardriving, an inexpensive technique using public utility vehicles such as tricycles to gather Wi-Fi data around neighborhoods. Utilized tools such as airmon-ng and Python library scapy for packet sniffing and analysis. Analyzed data gathered and documented the project using LaTeX.</p>

          <h5>Work Experience</h5>
          <p class="resume-list"><b>October 2018 - present: Software developer at Headstart Business Solutions Inc.</b>
            <br>
            Working with a team on a school information system, most prominently on the Grading module. Developed various functionalities using Elixir, GraphQL, Angular, and Typescript. Ensured that the user side of the system is usable and would provide a hassle-free experience for the user.
          </p>
          <p class="resume-list"><b>July - September 2018: Freelance</b>
            <br>
            Set up web and email hosting for Montepiedra Aggregates Corporation. Designed and developed an informative company website that exhibits their brand and identity.
          </p>
          <p class="resume-list"><b>July - August 2017: Intern at Insync HQ</b>
            <br>
            Redesigned and enhanced user experience of product referral page using concepts learned from UX design and frameworks such as Bootstrap and Materialize CSS.
          </p>

          <h5>Technical skills</h5>
          <p class="resume-list">Knowledgeable in Python and Elixir<br>
            Experienced in web development languages and frameworks: HTML, CSS, PHP, Javascript/Typescript, Angular, Vue<br>
            Knowledgeable in SQL
          </p>

          <h5>Other skills</h5>
          <p class="resume-list">Eager learner; willing to learn new concepts and technologies<br>
            Strong written and oral communication skills<br>
            Assertive team leader but also good and well-liked team player
          </p>

          <h5>Certificates</h5>
          <p class="resume-list"><a href="https://www.interaction-design.org/christine-felizardo/certificate/membership/QD11LtLx1?r=christine-felizardo">Member</a>, Interaction Design Foundation</p>
          <p class="resume-list"><a href="https://www.interaction-design.org/christine-felizardo/certificate/course/d6be9e76-a2ad-4ec9-a4fc-bc3ac2bd424d?certificateType=course">The Practical Guide to Usability (Top 10% Distinction)</a>, Interaction Design Foundation</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style>
#resume {
  font-family: 'Aileron', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8ff;
}
#resume .container .row {
  padding-bottom: 30px;
}
#resume .container h4 {
  padding-top: 30px;
  text-align: center;
}
#resume .container .row .col p, #resume .container .row .col h5 {
  text-align: left;
}
#resume .container .row .col p {
  font-size: 18px;
  text-align: justify;
}
#resume .container .row .col ul {
  text-align: left;
}
.resume-list {
  margin-left: 20px;
}
</style>
