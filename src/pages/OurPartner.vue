<template>
  <h1 style="margin-top: 80px; transition: 0.5s">Нам доверяют:</h1>

  <div class="wrapper">
    <div class="slider" style="margin-top: 50px">
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="" alt="rasm boladi" />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  margin-top: 100px;
  text-align: center;
  font-size: 43px;
  font-weight: 500;
  font-family: "Montserrat";
}

.wrapper {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 25%,
    rgb(213, 212, 212) 100%
  );
  padding: 30px 0px;
}

.slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  position: relative;
  width: 100%;
  animation: RunSlider 15s linear infinite;
}

.slider .slide-track .slide {
  width: 200px;
}

@keyframes RunSlider {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-200px * 9));
  }
}

@media screen and (max-width: 1100px) {
  h1 {
    font-size: 35px;
  }
}
</style>
