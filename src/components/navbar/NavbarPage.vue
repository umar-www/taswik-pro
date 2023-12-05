<template>
  <div class="navbar">
    <div class="logo">
      <!-- <img class="logoImg" src="../../assets/images/logo.jpg" alt="" /> -->
      <img class="logoText" src="../../assets/images/logoText.png" alt="" />
    </div>
    <ul class="main">
      <li><a href="">О компании</a></li>
      <li><a href="#ourProject">Проекты</a></li>
      <li><a href="">Направления</a></li>
      <li><a href="">Обучение</a></li>
    </ul>

    <div class="contact">
      <a style="text-decoration: none" href="tel:+998999999999">
        <p>+998 (99) 999 99 99</p>
      </a>
      <h2>Получить консультацию</h2>
    </div>

    <button v-if="burgerIcon" @click="toggleBurger" class="burgerBtn">
      <i class="fa-solid fa-bars"></i>
    </button>

    <button v-else @click="toggleBurger" class="closeBtn">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <Transition name="burger">
      <div v-if="burger" class="burgerMain">
        <div class="bg">
          <div class="logo">
            <img
              class="logoBurger"
              src="../../assets/images/logoBurger.png"
              alt=""
            />

            <ul class="mainBurger">
              <li @click="toggleBurger"><a href="">О компании</a></li>
              <li @click="toggleBurger"><a href="#ourProject">Проекты</a></li>
              <li @click="toggleBurger"><a href="">Направления</a></li>
              <li @click="toggleBurger"><a href="">Обучение</a></li>
            </ul>
          </div>

          <div class="contactBurger">
            <a style="text-decoration: none" href="tel:+998999999999">
              <p @click="toggleBurger">+998 (99) 999 99 99</p>
            </a>
            <p @click="toggleBurger">Получить консультацию</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const burger = ref(false);
const burgerIcon = ref(true);

const toggleBurger = () => {
  burger.value = !burger.value;
  burgerIcon.value = !burgerIcon.value;

  if (burger.value === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
</script>

<style scoped>
.burger-enter-active,
.burger-leave-active {
  transition: 1s;
}

.burger-enter-from,
.burger-leave-to {
  transform: translateX(-100%);
}

.navbar .burgerMain {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 10;
}

.burgerMain .bg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(251, 155, 60, 255);
  padding: 25px 80px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60%;
}

.bg .logoBurger {
  width: 100px;
  height: 30px;
}

.burgerMain .mainBurger {
  margin-top: 60px;
  padding: 5px;
  gap: 20px;
  align-items: start;
  flex-direction: column;
}

.mainBurger li {
  position: relative;
  list-style: none;
  margin-bottom: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.mainBurger li a {
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}

.mainBurger li a::after {
  content: "";
  position: absolute;
  background: #fff;
  width: 0%;
  height: 3px;
  transition: 0.5s;
  left: 0;
  bottom: -10px;
  opacity: 0;
}

.mainBurger li a:hover::after {
  width: 80%;
  opacity: 1;
}

.contactBurger p {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  transform: 0.3s;
}

.navbar {
  padding: 20px 80px;
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .logo {
  margin-right: 150px;
  cursor: pointer;
  position: relative;
}
.logo .logoText {
  width: 110px;
  height: 45px;
}

.logo .logoImg {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.logo p {
  position: absolute;
  top: 0;
  right: 0;
}

.navbar .main {
  display: flex;
  align-items: center;
  gap: 40px;
}
.main li {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
}
.main li a {
  text-decoration: none;
  color: #000;
  transition: 0.3s;
}

.navbar .main li a:hover {
  color: rgba(251, 155, 60, 255);
}

.navbar .contact {
  display: flex;
  gap: 50px;
}

.contact p,
.contact h2 {
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  transition: 0.3s;
}

.contact p:hover, .contact h2:hover {
  color: rgba(251, 155, 60, 255);
}

.burger,
.burgerBtn,
.closeBtn {
  display: none;
}

.contactBurger a:hover {
  color: rgba(251, 155, 60, 255);
}

@media screen and (max-width: 1400px) {
  .navbar .logo {
    margin-right: 80px;
  }

  .navbar .main li {
    font-size: 14px;
  }

  .contact p,
  .contact h2 {
    font-size: 12px;
    font-weight: 800;
  }
}

@media screen and (max-width: 1200px) {
  .navbar .logo {
    margin-right: 10px;
  }
}

@media screen and (max-width: 1110px) {
  .navbar .main,
  .navbar .contact {
    display: none;
  }

  .navbar .burgerBtn,
  .navbar .closeBtn {
    background: none;
    font-size: 22px;
    color: rgba(251, 155, 60, 255);
    font-weight: bold;
    border: none;
    display: block;
  }
}

@media screen and (max-width: 1000px) {
  .navbar {
    padding: 20px 30px;
  }

  .burgerMain .bg {
    padding: 25px 30px;
  }
}

@media screen and (max-width: 776px) {
  .burgerMain .bg {
    width: 80%;
  }
}
@media screen and (max-width: 576px) {
  .burgerMain .bg {
    width: 100%;
  }
}
</style>
