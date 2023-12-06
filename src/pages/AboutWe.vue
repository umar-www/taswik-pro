<template>
  <div class="aboutWorker">
    <h1>МЫ - это </h1>
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
            items: 1,
          },
          900: {
            items: 1.3,
          },
          1000: {
            items: 1,
          },
          1150: {
            items: 1.2,
          },
          1200: {
            items: 1.4,
          },
          1400: {
            items: 1.6,
          },
          1500: {
            items: 3,
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
  font-family: "Montserrat";
}
.aboutWorker{
    padding: 20px 80px;
}
.aboutWorker h1{
    text-align: center;
    font-size: 43px;
    font-weight: 600;
}
</style>
