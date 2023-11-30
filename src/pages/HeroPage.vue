<template>
  <div class="hero">
    <div class="about">
      <h1>
        <span style="color: rgba(251, 155, 60, 255)">М</span>аркетинг двигатель
        бизнеса
      </h1>

      <div
        class="contact"
        style="display: flex; align-items: center; gap: 50px"
      >
        <button>Обсудить проект</button>
        <span>Подробнее</span>
      </div>

      <div class="ourNetwork">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-vk"></i>
        <i class="fa-brands fa-facebook-f"></i>
      </div>
    </div>

    <div class="img">
      <img class="bg" src="../assets/images/removeBg.png" alt="" />
      <img class="heroImg" src="../assets/images/heroImg.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style>
h1 {
  font-family: "Montserrat";
  font-weight: 500;
}

.hero {
  margin-top: 50px;
  height: 85vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  /* padding: 20px 180px; */
}

.hero .img {
  position: relative;
  width: 100%;
}

.img .bg {
  position: absolute;
  bottom: 0;
  width: 85%;
  z-index: 1;
}

.img .heroImg {
  width: 125%;
  height: 560px;
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
}

.contact button:hover {
  background: rgba(251, 155, 60, 255);
}

.contact span {
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid #1f1f1f;
  cursor: pointer;
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
  
  .about h1{
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  .contact button{
    padding: 15px 40px;
    font-size: 16px;
  }
}

@media screen and (max-width: 576px) {
  .contact {
    flex-direction: column;
    margin-bottom: 50px;
  }
  .img .heroImg {
    height: 300px;
  }
}
</style>
