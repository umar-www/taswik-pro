<template>
  <div class="container">
    <Transition name="v">
      <div v-if="isModalOpen" class="overlay">
        <i
          style="font-weight: 300"
          @click="closeModal"
          class="fa-solid fa-x close"
        ></i>
        <div class="modal-content">
          <h3>Оставьте ваши контакты</h3>
          <p>Мы перезвоним вам в ближайшее время</p>
          <form action="" @submit.prevent="handleSubmit">
            <div class="contactModal">
              <input
                name="name"
                required
                v-model="userData.username"
                type="text"
                placeholder="Ваше имя"
              />
              <input
                name="phoneNumber"
                required
                v-model="userData.tel"
                type="text"
                placeholder="Телефон"
                maxlength="20"
                minlength="9"
              />
              <input
                required
                name="email"
                v-model="userData.email"
                type="email"
                placeholder="Е-mail"
              />
              <input
                name="text"
                v-model="userData.telegram"
                type="text"
                placeholder="Telegram @... (optional)"
              />
            </div>
            <button class="sendBtn">Отправить заявку</button>
          </form>
          <p>
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c политикой конфиденциальности.
          </p>
        </div>
      </div>
    </Transition>
    <div class="hero">
      <div class="about">
        <h1>
          <span style="color: rgba(251, 155, 60, 255)">М</span>аркетинг
          двигатель бизнеса
        </h1>

        <p>
          Мы поможем вам
          <span style="color: rgba(251, 155, 60, 255)" id="auto-write"></span>
        </p>

        <div
          class="contact"
          style="display: flex; align-items: center; gap: 50px"
        >
          <button @click="openModal">Обсудить проект</button>
          <span><a href="#company">Подробнее</a></span>
        </div>

        <div class="ourNetwork">
          <a href="https://www.instagram.com/taswik.uz/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <i class="fa-brands fa-vk"></i>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>

      <div class="img">
        <img class="bg" src="../assets/images/removeBg.png" alt="" />
        <img class="heroImg" src="../assets/images/heroImg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import axios from "axios";

const isModalOpen = ref(false);

const openModal = () => {
  document.body.style.overflow = "hidden";
  isModalOpen.value = true;
};

const closeModal = () => {
  document.body.style.overflow = "auto";
  isModalOpen.value = false;
};

const userData = ref({ username: "", tel: null, email: "", telegram: "" });
const toast = useToast();

const handleSubmit = async () => {
  const formattedTel = userData.value.tel.trim()
    ? userData.value.tel.trim().replace(/[ ,()-]/g, "")
    : "Telefon raqami yo'q";

  const token = "6719463782:AAEcFhZ0cNkq1HLHkuvooP28GGYaoUo4yV0";
  const chatID = "-1002039957816";
  const info = `<strong>TASWIK ROBOT🤖</strong>:%0A<strong>Username👤:</strong> ${
    userData.value.username[0].toUpperCase() + userData.value.username.slice(1)
  } %0A<strong>Phone Number☎️:</strong>${
    formattedTel.length === 13 ? formattedTel.slice(4) : formattedTel
  }%0A<strong>Email📩:</strong> ${
    userData.value.email
  }%0A<strong>Tg username🚀:</strong> ${userData.value.telegram}`;
  const data = await axios.post(
    ` https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${info}&parse_mode=html`
  );

  userData.value.tel = "";
  userData.value.username = "";
  userData.value.email = "";
  userData.value.telegram = "";

  if (data.status === 200) {
    toast.success("Your information successfully send");
  } else {
    toast.error("Your information was not sent successfully");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#auto-write", {
    strings: [
      "привлечь новых клиентов",
      "привлечь целевую аудиторию",
      "создать полный образ для вашей компании",
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  });
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
h1 {
  font-family: "Montserrat";
  font-weight: 500;
}
.overlay {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-top: 20px;
  backdrop-filter: blur(3px);
  background-color: rgb(68, 68, 68);
  background-color: rgba(89, 89, 89, 0.7);
}

.modal-content {
  border-radius: 5px;
  text-align: center;
  padding: 30px 50px;
  margin: 3% auto;
  width: 30%;
  background: #fff;
  z-index: 2;
  font-family: "Montserrat";
}
.modal-content .contactModal {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.modal-content h3 {
  font-size: 35px;
  font-weight: 600;
}
.modal-content p {
  font-size: 14px;
}
.contactModal input {
  padding: 13px 0px 13px 20px;
  border-radius: 5px;
  border: 1px solid #000;
}
.contactModal input:focus {
  outline: none;
}
form .sendBtn {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: #1f1f1f;
  padding: 10px 30px;
  border-radius: 5px;
  border: 2px solid #1f1f1f;
  transition: 0.3s;
  box-shadow: -7px -7px 0px 0px #ccc;
  text-align: left;
  text-align: center;
  width: 100%;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: 300;
  font-weight: bold;
  cursor: pointer;
}
.video-container {
  position: relative;
  padding-bottom: 50.25%;
  padding-top: 30px;
  overflow: hidden;
}

.hero {
  margin-top: 50px;
  height: 85vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1.2fr 1.4fr;
  gap: 40px;
  /* padding: 20px 180px; */
}

.hero .img {
  position: relative;
  width: 100%;
}

.img img {
  width: 100%;
}

.img .bg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  z-index: 1;
  filter: drop-shadow(20px -7px 5px #fff);
}

.img .heroImg {
  width: 125%;
  height: 560px;
  border-radius: 30%;
}

.about h1 {
  font-size: 56px;
  font-weight: 500;
  text-shadow: 5px 0px 1px #ccc;
}
.about h1 span {
  font-weight: 600;
}

.about p {
  font-family: "Montserrat";
  padding: 40px 0px;
  font-size: 20px;
  height: 120px;
}

.contact button {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background: #1f1f1f;
  padding: 20px 50px;
  border-radius: 5px;
  border: 2px solid #1f1f1f;
  transition: 0.3s;
  box-shadow: -7px -7px 0px 0px #ccc;
}

.contact button:hover {
  background: none;
  border: 2px solid rgba(251, 155, 60, 255);
  color: rgba(251, 155, 60, 255);
}
.contact button:active {
  transform: scale(1.1);
}
.contact a {
  text-decoration: none;
  color: inherit;
}
.contact span {
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid #1f1f1f;
  cursor: pointer;
  transition: 0.3s;
}
.contact span:hover {
  color: rgba(251, 155, 60, 255);
  border-bottom-color: rgba(251, 155, 60, 255);
}

.ourNetwork {
  margin-top: 30px;
}
.ourNetwork i {
  font-size: 40px;
  margin: 0px 15px;
  color: #000;
  cursor: pointer;
  transition: 0.3s;
}
.ourNetwork i:hover {
  color: rgba(251, 155, 60, 255);
}

@media screen and (max-width: 1400px) {
  .img .heroImg {
    height: 450px;
  }
  .modal-content {
    width: 40%;
  }
}

@media screen and (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero h1,
  .hero p {
    text-align: center;
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ourNetwork {
    text-align: center;
  }

  .img .bg {
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 60%;
    z-index: 1;
  }

  .img .heroImg {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .hero {
    /* padding: 20px 30px; */
  }
  .modal-content {
    width: 50%;
  }
}

@media screen and (max-width: 992px) {
  .img .heroImg {
    height: 450px;
  }
}

@media screen and (max-width: 776px) {
  .img .heroImg {
    height: 350px;
  }

  .about h1 {
    font-size: 54px;
    margin-bottom: 20px;
  }

  .contact button {
    padding: 15px 40px;
    font-size: 16px;
  }
  .modal-content {
    width: 70%;
  }
}

@media screen and (max-width: 576px) {
  .about h1 {
    font-size: 48px;
  }
  .contact {
    flex-direction: column;
    margin-bottom: 50px;
  }
  .img .heroImg {
    height: 300px;
  }
  .overlay {
    padding: 25px 40px;
  }
  .modal-content {
    margin: 8% auto;
    width: 100%;
  }
}
@media screen and (max-width: 476px) {
  .overlay {
    padding: 25px 20px;
  }
  .modal-content {
    margin: 7% auto;
    width: 100%;
  }
}
</style>
