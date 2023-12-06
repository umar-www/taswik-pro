<template>
  <div class="ourWork" id="our-work">
    <div class="container">
      <h1>
        <span style="color: rgba(251, 155, 60, 255)">М</span>ы
        <span
          >более 5-ти лет успешно <br />
          работаем</span
        >
        в этих направлениях
        <p
          style="
            color: #ccc;
            font-size: 14px;
            font-weight: 600;
            margin-top: 20px;
          "
        >
          ИНСТАГРАМ:@GOODWILL_RU
        </p>
      </h1>

      <div class="about">
        <div class="aboutSection">
          <div class="flexContent">
            <div class="content">
              <h2>Разработка сайтов</h2>
              <div></div>
              <p>
                Анализируем продукт и конкурентов. Проектируем, разрабатываем
                дизайн и запускаем сайт.
              </p>
            </div>

            <div class="content">
              <h2>Контекстная реклама</h2>
              <div></div>
              <p>
                Качественная настройка, ключевые фразы и ведение рекламных
                компаний Яндекс директ и Google Adwords.
              </p>
            </div>
            <div class="content">
              <h2>Таргетированная реклама</h2>
              <div></div>
              <p>
                Таргет – ключевая часть SMM-продвижения. Собрав необходимую
                информации, проведя анализ конкурентов. Разрабатываем стратегию
                и запускаем рекламную компанию с полной отчетностью.
              </p>
            </div>
          </div>
          <div class="flexContent">
            <div class="content">
              <h2>Youtube</h2>
              <div></div>
              <p>
                Вовлекаем подписчиков в культуру бренда, оформляем профиль,
                прорабатываем контент-план, общаемся с аудиторией, работаем с
                блогерами, настраиваем рекламу, подводим итоги, готовим отчет.
              </p>
            </div>
            <div class="content">
              <h2>Tik Tok</h2>
              <div></div>
              <p>
                Оформляем аккаунт, создаем контент, разрабатываем контент план
                запускаем рекламу, следим за эффективностью.
              </p>
            </div>
            <div class="content">
              <h2>SMM</h2>
              <div></div>
              <p>
                Вовлекаем подписчиков в культуру бренда, оформляем профиль,
                прорабатываем контент-план, общаемся с аудиторией, работаем с
                блогерами, настраиваем рекламу, подводим итоги, готовим отчет.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.ourWork {
  margin-top: 50px;
  font-family: "Montserrat";
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 25%,
    rgb(213, 212, 212) 100%
  );
  width: 100%;
  height: 120vh;
}
.ourWork .container {
  padding: 80px 0px;
}
.ourWork .container h1 {
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 50px;
}
.ourWork .container h1 span {
  font-weight: 600;
}

.ourWork .about {
  display: flex;
  align-items: center;
}
.about .aboutSection {
  display: grid;
  grid-template-columns: 1fr;
  gap: 120px;
}
.aboutSection .flexContent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.flexContent .content div {
  margin: 5px 0px 0px 0px;
  width: 50%;
  height: 3px;
  background: rgba(251, 155, 60, 255);
}

.about h3 {
  font-size: 12px;
  rotate: 90deg;
  font-weight: bold;
  color: #ccc;
}

.aboutSection .content h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}
.aboutSection .content p {
  font-size: 18px;
  font-weight: 400;
}

@media screen and (max-width: 1300px) {
  .ourWork .container h1 {
    font-size: 35px;
    text-align: center;
  }

  .aboutSection .content h2 {
    font-size: 22px;
  }
  .aboutSection .content p {
    font-size: 16px;
  }
}

@media screen and (max-width: 1200px) {
  .ourWork .container h1 {
    font-size: 32px;
  }
}

@media screen and (max-width: 776px) {
  .ourWork {
    height: 220vh;
  }
  .ourWork .container h1 {
    font-size: 30px;
  }
  .about .aboutSection {
    gap: 50px;
  }

  .aboutSection .flexContent {
    text-align: center;
    grid-template-columns: 1fr;
    gap: 100px;
  }
  .flexContent .content {
    padding: 10px 60px;
  }
  .flexContent .content div {
    width: 100%;
  }
  @media screen and (max-height: 900px) {
    .ourWork {
      height: 260vh;
    }
  }
}
</style>
