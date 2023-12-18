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
import { useHead } from "@vueuse/head";
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

useHead({
  meta: [
    {
      name: "description",
      content: "",
    },
    {
      name: "keywords",
      content:
        "marketing, target, company, uz, ru, en, MARKETING, COMPANY, TARGET, taswik, TASWIK, Taswik",
    },
  ],
});
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
