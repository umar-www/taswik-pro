<template>
  <div class="footer">
    <div class="left">
      <h1>Новые решения в маркетинге</h1>
      <p>
        Высокая скорость внедрения и разработки проверенных рабочих <br />
        инструментов.
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="contact">
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

      <div class="check">
        <div class="checkBox">
          <div></div>
        </div>
        <p>Я согласен с обработкой персональных данных</p>
      </div>
    </div>
    <div class="right">
      <img src="../assets/images/footerImg.png" alt="" />
    </div>
  </div>
  <div class="webSiteAbout">
    <p>
      <i class="fa-brands fa-instagram"></i>
      <a style="text-decoration: none; color: inherit" href=""> Instagram </a>
    </p>
    <p>
      <i class="fa-brands fa-telegram"></i>
      <a style="text-decoration: none; color: inherit" href=""> Telegram </a>
    </p>
    <p>
      <i class="fa-brands fa-youtube"></i>
      <a style="text-decoration: none; color: inherit" href=""> You tube </a>
    </p>
    <p>
      <i class="fa-solid fa-phone"></i>
      <a style="text-decoration: none; color: inherit" href="tel:++998999999999"
        >+998 (99) 999 99 99</a
      >
    </p>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import axios from "axios";
import { ref } from "vue";

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
</script>

<style scoped>
.webSiteAbout {
  /* padding: 10px 180px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  justify-content: space-between;
  background: #000;
  height: 40px;
}
.webSiteAbout p {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat";
  margin-top: 10px;
  color: rgba(251, 155, 60, 255);
  transition: 0.3s;
}
.webSiteAbout p:hover {
  color: #fff;
}
.footer {
  padding: 20px 180px 0px 180px;
  margin-top: 150px;
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 25%,
    rgb(213, 212, 212) 100%
  );
}
.left {
  width: 120%;
}
.right {
  width: 80%;
}
.left h1 {
  color: rgba(251, 155, 60, 255);
  font-weight: 400;
}
.left p {
  color: #757575;
  margin-top: 30px;
}

.contact {
  display: grid;
  /* align-items: center; */
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 80px;
}
form input {
  padding: 20px 0px 20px 20px;
  border-radius: 5px;
  border: 1px solid rgba(251, 155, 60, 255);
  transition: 0.3s;
}
input:focus {
  /* outline: 1px solid rgba(251, 155, 60, 255); */
  box-shadow: 1px -1px 10px 2px rgba(251, 155, 60, 255);
  outline: none;
}
.left .sendBtn {
  margin-top: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: #1f1f1f;
  padding: 17px 30px;
  border-radius: 5px;
  border: 2px solid #1f1f1f;
  transition: 0.3s;
  box-shadow: -7px -7px 0px 0px #ccc;
}
.left .sendBtn:hover {
  background: none;
  border: 2px solid rgba(251, 155, 60, 255);
  color: rgba(251, 155, 60, 255);
}
.left .sendBtn:active {
  transform: scale(1.1);
}

.check {
  display: flex;
  align-items: center;
  gap: 10px;
}
.check .checkBox {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(251, 155, 60, 255);
}
.checkBox div {
  width: 13px;
  height: 13px;
  background: rgba(251, 155, 60, 255);
}

.right img {
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1500px) {
  .right {
    width: 100%;
  }
}
@media screen and (max-width: 1400px) {
  .right {
    width: 100%;
  }
}
@media screen and (max-width: 1300px) {
  .footer {
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
  .contact,
  .check {
    justify-content: center;
  }
  .right img {
    width: 50%;
  }
}
@media screen and (max-width: 992px) {
  .footer {
    padding: 20px 80px;
  }
}
@media screen and (max-width: 776px) {
  .webSiteAbout {
    grid-template-columns: repeat(2, 1fr);
    height: 90px;
  }
  .contact {
    grid-template-columns: 1fr;
    place-items: center;
  }
  .contact input {
    width: 80%;
  }
  .webSiteAbout p {
    font-size: 14px;
  }
}
@media screen and (max-width: 576px) {
  .left .sendBtn {
    margin-top: 0px;
  }
  .contact input {
    width: 100%;
  }
}
</style>
