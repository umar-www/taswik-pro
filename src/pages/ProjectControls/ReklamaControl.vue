<template>
  <section>
    <div class="contentImg1">
      <img
        style="transition: 0.3s"
        v-motion-slide-visible-once-bottom
        src="../../assets/images/heroImg.png"
        alt="Rasm boladi"
      />
    </div>
    <div
      class="contentText1"
      style="transition: 0.3s"
      v-motion-slide-visible-once-bottom
    >
      <div class="aboutContent">
        <h1>УКС</h1>
        <div></div>
      </div>
      <div>
        <h3>Задача:</h3>
        <p>1. Увеличить количество заявок на сайте и обращений</p>
        <p>2. Уменьшить стоимость обращения</p>
      </div>
      <div>
        <h3>Результат:</h3>
        <p>продано 4 квартиры стоимостью 10,5 млн. рублей за месяц</p>
      </div>
      <button style="transition: 0.3s" v-motion-slide-visible-once-bottom>
        Подробнее
      </button>
    </div>
  </section>
  <section>
    <div
      class="contentText2"
      style="transition: 0.3s"
      v-motion-slide-visible-once-bottom
    >
      <div class="aboutContent">
        <h1>World Gym</h1>
        <div></div>
      </div>
      <div>
        <h3>Задача:</h3>
        <p>Увеличение продаж абонементов в фитнес клуб</p>
      </div>
      <div>
        <h3>Результат:</h3>
        <p>571 542 - показов</p>
        <p>4146 переходов на сайт</p>
        <p>145 новых заявок с сайта</p>
      </div>
      <button style="transition: 0.3s" v-motion-slide-visible-once-bottom>
        Подробнее
      </button>
    </div>
    <div class="contentImg2">
      <img
        style="transition: 0.3s"
        v-motion-slide-visible-once-bottom
        src="../../assets/images/heroImg.png"
        alt="Rasm boladi"
      />
    </div>
    <div
      class="contentText2Mobil"
      style="transition: 0.5s"
      v-motion-slide-visible-once-bottom
    >
      <div class="aboutContent">
        <h1>ТЦ "Домашний"</h1>
        <div></div>
      </div>
      <div>
        <h3>Задача:</h3>
        <p>Узнаваемость бренда, презентация ассортимента</p>
      </div>
      <div>
        <h3>Результат:</h3>
        <p>1. Охват 202000 за 1 месяц</p>
        <p>2. 7600 подписчиков</p>
      </div>
      <button style="transition: 0.5s" v-motion-slide-visible-once-bottom>
        Подробнее
      </button>
    </div>
  </section>
  <section>
    <div class="contentImg3">
      <img
        style="transition: 0.3s"
        v-motion-slide-visible-once-bottom
        src="../../assets/images/heroImg.png"
        alt="Rasm boladi"
      />
    </div>
    <div
      class="contentText3"
      style="transition: 0.3s"
      v-motion-slide-visible-once-bottom
    >
      <div class="aboutContent">
        <h1>Fizruk</h1>
        <div></div>
      </div>
      <div>
        <h3>Задача:</h3>
        <p>Увеличение продаж абонементов в фитнес клуб</p>
      </div>
      <div>
        <h3>Результат:</h3>
        <p>1 112 549- показов</p>
        <p>2062 переходов на сайт</p>
      </div>
      <button style="transition: 0.3s" v-motion-slide-visible-once-bottom>
        Подробнее
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  margin-bottom: 80px;
  padding: 10px 80px;
}

.contentText1,
.contentText2,
.contentText3,
.contentText2Mobil {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contentText2 {
  display: none;
}
.contentText1 .aboutContent h1,
.contentText2 .aboutContent h1,
.contentText3 .aboutContent h1 .contentText2Mobil .aboutContent h1 {
  font-size: 31px;
  font-weight: 500;
  margin: 0;
}

.contentText1 .aboutContent div,
.contentText2 .aboutContent div,
.contentText3 .aboutContent div,
.contentText2Mobil .aboutContent div {
  width: 130px;
  height: 3px;
  background: rgba(251, 155, 60, 255);
  margin: 0;
}

.contentText1 h3,
.contentText2 h3,
.contentText3 h3,
.contentText2Mobil h3 {
  margin-top: 15px;
  font-size: 22px;
  font-weight: 500;
}

.contentText1 p,
.contentText2 p,
.contentText3 p .contentText2Mobil p {
  margin: 0;
  font-size: 18px;
  font-weight: 300;
}

.contentText1 button,
.contentText2 button,
.contentText3 button,
.contentText2Mobil button {
  width: 250px;
  margin-top: 35px;
  font-size: 18px;
  padding: 15px 40px;
  font-weight: 500;
  color: #fff;
  background: #000;
  border: 2px solid #000;
  border-radius: 5px;
  transition: 0.3s;
  box-shadow: -7px -7px 0px 0px #ccc;
}

.contentText1 button:hover,
.contentText2 button:hover,
.contentText3 button:hover,
.contentText2Mobil button:hover {
  background: none;
  border: 2px solid rgba(251, 155, 60, 255);
  color: rgba(251, 155, 60, 255);
}
.contentText1 button:active,
.contentText2 button:active,
.contentText3 button:active,
.contentText2Mobil button:active {
  transform: scale(1.1);
}

@media screen and (min-width: 1200px) {
}

@media screen and (max-width: 1200px) {
  section {
    padding: 10px 40px;
    grid-template-columns: 1fr;
    place-items: center;
  }

  .contentText1,
  .contentText2,
  .contentText3,
  .contentText2Mobil {
    width: 55%;
  }

  .contentText1 .aboutContent h1,
  .contentText2 .aboutContent h1,
  .contentText3 .aboutContent h1,
  .contentText2Mobil .aboutContent h1 {
    text-align: center;
    font-size: 34px;
  }

  .contentText1 h3,
  .contentText2 h3,
  .contentText3 h3,
  .contentText2Mobil h3 {
    text-align: center;
    font-size: 24px;
  }

  .contentText1 p,
  .contentText2 p,
  .contentText3 p,
  .contentText2Mobil p {
    font-size: 18px;
    text-align: center;
  }

  .contentText1 button,
  .contentText2 button,
  .contentText3 button,
  .contentText2Mobil button {
    font-size: 16px;
    padding: 10px 20px;
    width: auto;
  }

  section img {
    width: 100%;
  }
}
@media screen and (max-width: 776px) {
  section {
    padding: 10px 40px;
    grid-template-columns: 1fr;
    place-items: center;
  }

  .contentText1,
  .contentText2,
  .contentText3,
  .contentText2Mobil {
    width: 100%;
  }

  .contentText1 .aboutContent h1,
  .contentText2 .aboutContent h1,
  .contentText3 .aboutContent h1,
  .contentText2Mobil .aboutContent h1 {
    text-align: center;
    font-size: 32px;
  }

  .contentText1 h3,
  .contentText2 h3,
  .contentText3 h3,
  .contentText2Mobil h3 {
    text-align: center;
    font-size: 22px;
  }

  .contentText1 p,
  .contentText2 p,
  .contentText3 p,
  .contentText2Mobil p {
    font-size: 16px;
    text-align: center;
  }

  .contentText1 button,
  .contentText2 button,
  .contentText3 button,
  .contentText2Mobil button {
    font-size: 16px;
    padding: 10px 20px;
    width: auto;
  }

  section img {
    width: 100%;
  }
}
</style>
