<template>
  <div class="footer">
    <div class="left">
      <h1>Новые решения в маркетинге</h1>
      <p>
        Высокая скорость внедрения и разработки проверенных рабочих <br />
        инструментов.
      </p>

      <div class="contact">
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Телефон" />
      </div>
      <button class="sendBtn">Отправить заявку</button>

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

<script>
export default {};
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
.webSiteAbout p:hover{
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
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 80px;
}
.contact input {
  padding: 20px 0px 20px 20px;
  border-radius: 5px;
  border: 1px solid rgba(251, 155, 60, 255);
  transition: 0.3s;
}
.contact input:focus {
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
  .webSiteAbout p{
    font-size: 14px;
  }
}
@media screen and (max-width: 576px) {
  .left .sendBtn {
    margin-top: 0px;
  }
}
</style>
