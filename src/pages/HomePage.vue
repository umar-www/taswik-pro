<template>
  <Navbar />
  <div class="box">
    <Hero />
  </div>
  <div class="project">
    <ProjectPage />
  </div>
</template>

<script>
import { Navbar } from "../components/navbar/index";
import { Hero, ProjectPage } from "./index";

export default {
  components: {
    Hero,
    Navbar,
    ProjectPage,
  },
};
</script>

<style scoped>
.box {
  padding: 20px 180px;
}
.project{
  padding: 20px 100px;
}

@media screen and (max-width: 1350px) {
  .project{
    padding: 0px 30px;
  }
}

@media screen and (max-width: 1000px) {
  .box {
    padding: 20px 30px;
  }
}
</style>
