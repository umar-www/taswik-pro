<template>
  <div id="company" class="company">
    <img
      style="transition: 0.9s"
      v-motion-pop-visible-once
      id="companyImg"
      src="../assets/images/logo.jpg"
      alt=""
    />
    <div
      class="companyAbout"
      style="transition: 0.8s"
      v-motion-slide-visible-once-right
    >
      <h3>О Компании:</h3>
      <p>
        TASWIK – это маркетинговая студия, объединяющая творческий подход и
        технологическую экспертизу для создания эффективных маркетинговых
        решений. Наша компания, хотя и молода на ташкентском рынке, уже
        утвердила себя как инновационный игрок, предоставляя клиентам
        современные стратегии продвижения и уникальные рекламные кампании.
        <br />
        <br />
        Наша уникальная команда представляет собой гармоничное сочетание русско-
        и узбекскоговорящих специалистов, что обеспечивает не только широкий
        культурный контекст, но и лучший понимание потребностей наших клиентов.
        <br />
        <br />
        Мы стремимся к совершенству в каждом аспекте нашей работы, уверены в
        профессионализме наших сотрудников и готовы предложить вам выдающийся
        уровень обслуживания. С нами ваш бизнес находится в надежных руках!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.company {
  margin-top: 100px;
  padding: 100px 180px;
  font-family: "Montserrat";
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  place-items: center;
  gap: 30px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 25%,
    rgb(213, 212, 212) 100%
  );
}
.company #companyImg {
  width: 400px;
  height: 400px;
  border-radius: 50%;
}
.company .companyAbout h3 {
  color: rgba(251, 155, 60, 255);
  font-size: 35px;
  margin-bottom: 20px;
}
.companyAbout p {
  font-size: 18px;
  font-weight: 400;
}

@media screen and (max-width: 1400px) {
  .company {
    padding: 80px 150px;
  }
  .companyAbout p {
    font-size: 16px;
  }
}
@media screen and (max-width: 1250px) {
  .company {
    padding: 60px 120px;
  }
  .company #companyImg {
    width: 350px;
    height: 350px;
  }
  .companyAbout p {
    font-size: 16px;
  }
}
@media screen and (max-width: 1200px) {
  .company {
    margin-top: 350px;
    padding: 60px 120px;
    grid-template-columns: 1fr;
  }
  .company #companyImg {
    width: 350px;
    height: 350px;
  }
  .companyAbout p {
    font-size: 16px;
  }
}
@media screen and (max-width: 776px) {
  .company {
    padding: 50px 50px;
  }
  .company #companyImg {
    width: 300px;
    height: 300px;
  }
  .companyAbout p {
    font-size: 16px;
  }
}
@media screen and (max-width: 576px) {
  .company {
    padding: 50px 50px;
  }
  .company #companyImg {
    width: 270px;
    height: 270px;
  }
  .companyAbout {
    text-align: center;
  }
  .company .companyAbout h3 {
    font-size: 28px;
  }
  .companyAbout p {
    font-size: 14px;
  }
}
</style>
