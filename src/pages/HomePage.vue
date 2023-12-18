<template>
  <Navbar />
  <div class="box">
    <Hero />
  </div>
  <Company />
  <div class="project">
    <ProjectPage />
  </div>
  <Portfolio />
  <OurWork />
  <AboutWe />
  <Partners />
  <YouTube />
  <Work />
  <FooterContact />
</template>

<script setup>
import { Navbar } from "../components/navbar/index";
import {
  Hero,
  ProjectPage,
  Portfolio,
  OurWork,
  AboutWe,
  Partners,
  YouTube,
  Work,
  FooterContact,
  Company,
} from "./index";
</script>

<style scoped>
.box {
  padding: 20px 180px;
}
.project {
  padding: 20px 130px;
}

@media screen and (max-width: 1350px) {
  .project {
    padding: 0px 30px;
  }
}

@media screen and (max-width: 1000px) {
  .box {
    padding: 20px 30px;
  }
}
</style>
