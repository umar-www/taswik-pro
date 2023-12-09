<template>
  <div class="aboutWorker">
    <h1>МЫ - это ТАСВИК</h1>
    <div class="overlay1"></div>

    <div class="aboutWe">
      <button class="prevSlide" @click="prevSlide">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="owl-carousel owl-theme">
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/boboy.png" alt="" />
          <div class="aboutHuman">
            <h2>John</h2>
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div class="overlay2"></div>

      <button class="nextSlide" @click="nextSlide">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const owlCarousel = ref(null);

    onMounted(() => {
      // eslint-disable-next-line no-undef
      owlCarousel.value = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          300: {
            items: 1,
          },
          500: {
            items: 1.5,
          },
          700: {
            items: 2,
          },
          900: {
            items: 2.4,
          },
          1000: {
            items: 2.5,
          },
          1150: {
            items: 3,
          },
          1200: {
            items: 3,
          },
          1400: {
            items: 3,
          },
          1500: {
            items: 4,
          },
        },
      });
    });

    const nextSlide = () => {
      owlCarousel.value.trigger("next.owl.carousel");
    };

    const prevSlide = () => {
      owlCarousel.value.trigger("prev.owl.carousel");
    };

    return {
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.aboutWorker {
  margin-top: 100px;
  padding: 20px 80px;
  position: relative;
}
.aboutWorker h1 {
  text-align: center;
  font-size: 38px;
  font-weight: 400;
}

.aboutWorker .aboutWe {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.aboutWorker .overlay1 {
  position: absolute;
  width: 27.4%;
  height: 90%;
  backdrop-filter: blur(5px);
  left: 0;
  z-index: 9;
}
.aboutWorker .overlay2 {
  position: absolute;
  width: 24.8%;
  height: 100%;
  backdrop-filter: blur(5px);
  top: 0;
  right: 0;
  z-index: 9;
}
.owl-carousel .item {
  padding: 20px 30px;
  border: 4px solid rgba(251, 155, 60, 255);
  /* text-align: center; */
}
.item img {
  object-fit: cover;
  width: 100%;
  height: 350px;
}
.item .aboutHuman {
  padding: 20px 0px;
}
.item .aboutHuman h2 {
  font-size: 35px;
  font-weight: bold;
}
.item .aboutHuman p {
  font-size: 18px;
  font-weight: 400;
}
.aboutHuman div {
  width: 50%;
  height: 3px;
  background: rgba(251, 155, 60, 255);
}

.aboutWe button {
  z-index: 10;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(251, 155, 60, 255);
  color: #fff;
  border: none;
}

.aboutWe .prevSlide {
  left: 10px;
}
.aboutWe .nextSlide {
  right: 10px;
}

@media screen and (max-width: 1500px) {
  .aboutWorker .overlay1 {
    position: absolute;
    width: 35%;
    height: 90%;
    backdrop-filter: blur(5px);
    left: 0;
    z-index: 9;
  }
  .aboutWorker .overlay2 {
    position: absolute;
    width: 33.5%;
    height: 100%;
    backdrop-filter: blur(5px);
    top: 0;
    right: 0;
    z-index: 9;
  }
}

@media screen and (max-width: 1500px) {
  .aboutWorker .overlay1 {
    display: none;
  }
  .aboutWorker .overlay2 {
    display: none;
  }
}

@media screen and (max-width: 1100px) {
  .aboutWorker {
    padding: 20px 30px;
  }
  .aboutWorker h1{
    font-size: 33px;
  }
}
</style>
