<template>
  <h1>Вот, что о нас говорят:</h1>

  <Transition name="v">
    <div v-if="isModalOpen" class="overlay" @click="closeModal">
      <i
        style="font-weight: 300"
        @click="closeModal"
        class="fa-solid fa-x close"
      ></i>
      <div class="modal-content">
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/BKJHlYekOpM?si=XN_8S-0dWo9E5xFN"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Transition>

  <div class="you-tube">
    <span>ВИДЕО ОТЗЫВЫ</span>
    <div @click="openModal" class="animation-container">
      <i class="fa-brands fa-youtube"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  document.body.style.overflow = "hidden";
  isModalOpen.value = true;
};

const closeModal = () => {
  document.body.style.overflow = "auto";
  isModalOpen.value = false;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
h1 {
  text-align: center;
  font-size: 43px;
  font-weight: 400;
  font-family: "Montserrat";
  margin-top: 100px;
}
.you-tube {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
span {
  display: flex;
  gap: 100px;
  text-align: center;
  margin-top: 100px;
  font-size: 80px;
  font-weight: 400;
  opacity: 0.15;
}
.you-tube .animation-container {
  position: absolute;
  top: 40%;
  font-size: 100px;
  color: rgba(221, 56, 56, 255);
  cursor: pointer;
  border-radius: 50%;
}
.overlay {
  position: fixed;
  z-index: 1;
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
  margin: 5% auto;
  width: 70%;
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

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* 
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(360deg);
  }
  75% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
} */

.animation-container {
  display: inline-block;
  animation: spin 4s linear infinite;
}

@media screen and (max-width: 1100px) {
  h1 {
    font-size: 35px;
  }
}
</style>
