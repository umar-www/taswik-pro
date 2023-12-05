<template>
  <div class="container">
    <h1>
      <span style="color: rgba(251, 155, 60, 255)">В</span> нашем портфолио
    </h1>

    <div class="statistic">
      <div class="static">
        <h2><span>+</span> 5 <span>лет</span></h2>
        <div></div>
        <p>Работаем с 2015 года</p>
      </div>
      <div class="static">
        <h2><span>+</span> 2 <span>филлиала</span></h2>
        <div></div>
        <p>Работаем в Иркутске и Москве</p>
      </div>
      <div class="static">
        <h2><span>+</span> 110 <span>проектов</span></h2>
        <div></div>
        <p>Проектирование, разработка, анализ и внедрение</p>
      </div>
      <div class="static">
        <h2><span>+</span> 100 <span>клиентов</span></h2>
        <div></div>
        <p>От интернет-магазинов до Аэропорта</p>
      </div>
    </div>

    <!-- <OurWork /> -->
  </div>
</template>

<script>
// import { OurWork } from "./index";

// export default { components: { OurWork } };
</script>

<style scoped>
.container {
  margin-top: 100px;
  font-family: "Montserrat";
}
.container h1 {
  text-align: center;
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 70px;
}
.statistic {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
}
.static h2 {
  font-size: 28px;
  font-weight: bold;
}
.static div {
  margin: 5px 0px 5px 0px;
  width: 80%;
  height: 3px;
  background: rgba(251, 155, 60, 255);
}

.static p {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
}

@media screen and (max-width: 1300px) {
  .container h1 {
    font-size: 32px;
  }

  .static h2 {
    font-size: 22px;
  }
  .static p {
    font-size: 16px;
  }
}

@media screen and (max-width: 1100px) {
  .statistic {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
  .static div {
    width: 100%;
  }
}

@media screen and (max-width: 576px) {
  .statistic {
    grid-template-columns: 1fr;
    padding: 0px 50px;
  }
  .static div {
    width: 100%;
  }
}
</style>
